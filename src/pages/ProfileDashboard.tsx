
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Edit, Save, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface UserIdea {
  id: string;
  idea: string;
  ai_response: any;
  created_at: string;
}

interface ProfileData {
  first_name: string | null;
  last_name: string | null;
  created_at: string | null;
  background_field: string | null;
  technical_skills: string | null;
  startup_experience: string | null;
  startup_name: string | null;
  startup_description: string | null;
  target_industry: string | null;
  target_customer: string | null;
  current_stage: string | null;
  team_size: string | null;
  tech_stack: string | null;
  funding_raised: string | null;
}

import SampleStartupIdeas from "@/components/SampleStartupIdeas";

export default function ProfileDashboard() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState<ProfileData>({
    first_name: "",
    last_name: "",
    created_at: null,
    background_field: "",
    technical_skills: "",
    startup_experience: "",
    startup_name: "",
    startup_description: "",
    target_industry: "",
    target_customer: "",
    current_stage: "",
    team_size: "",
    tech_stack: "",
    funding_raised: "",
  });

  // Fetch profile info
  const { data: profile } = useQuery({
    queryKey: ["profile", user?.id],
    queryFn: async () => {
      if (!user) return null;
      const { data } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .maybeSingle();
      return data as ProfileData;
    },
    enabled: !!user,
  });

  // Fetch user's ideas
  const { data: userIdeas, isLoading: loadingIdeas } = useQuery({
    queryKey: ["user-ideas", user?.id],
    queryFn: async () => {
      if (!user) return [];
      const { data } = await supabase
        .from("user_ideas")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });
      return (data ?? []) as UserIdea[];
    },
    enabled: !!user,
  });

  // Update profile mutation
  const updateProfileMutation = useMutation({
    mutationFn: async (profileData: Partial<ProfileData>) => {
      if (!user) throw new Error("No user");
      const { error } = await supabase
        .from("profiles")
        .update(profileData)
        .eq("id", user.id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile", user?.id] });
      toast({
        title: "Profile updated",
        description: "Your profile has been successfully updated.",
      });
      setIsEditing(false);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to update profile. Please try again.",
        variant: "destructive",
      });
    },
  });

  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (profile) {
      setEditForm(profile);
    }
  }, [profile]);

  const handleSave = () => {
    updateProfileMutation.mutate(editForm);
  };

  const handleCancel = () => {
    if (profile) {
      setEditForm(profile);
    }
    setIsEditing(false);
  };

  // Dummy plan value - properly typed
  const pricingPlan = "Free" as const;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-500">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-slate-900">Profile Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Pricing Plan */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Pricing Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-2">
                <Badge className="bg-blue-600">
                  {pricingPlan}
                </Badge>
              </div>
              <div className="text-slate-600">
                Enjoy basic access to all essential features.
              </div>
              <Button variant="outline" className="mt-4 w-full" onClick={() => navigate("/pricing")}>
                Manage Plan
              </Button>
            </CardContent>
          </Card>

          {/* Account Details */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Account Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-2">
                <span className="font-semibold">User ID:</span>
                <span className="ml-2 text-slate-700 text-xs break-all">{user?.id}</span>
              </div>
              <div>
                <span className="font-semibold">Ideas submitted:</span>
                <span className="ml-2 text-slate-700">{userIdeas?.length ?? 0}</span>
              </div>
            </CardContent>
          </Card>

          {/* Personal Information */}
          <Card className="col-span-1 md:col-span-3">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Personal Information</CardTitle>
                {!isEditing ? (
                  <Button variant="outline" size="sm" onClick={() => setIsEditing(true)}>
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                ) : (
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={handleCancel}>
                      <X className="h-4 w-4 mr-2" />
                      Cancel
                    </Button>
                    <Button size="sm" onClick={handleSave} disabled={updateProfileMutation.isPending}>
                      <Save className="h-4 w-4 mr-2" />
                      Save
                    </Button>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Basic Info */}
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" value={user?.email || ""} disabled />
                  </div>
                  
                  <div>
                    <Label htmlFor="first_name">First Name</Label>
                    {isEditing ? (
                      <Input
                        id="first_name"
                        value={editForm.first_name || ""}
                        onChange={(e) => setEditForm({ ...editForm, first_name: e.target.value })}
                      />
                    ) : (
                      <Input value={profile?.first_name || "-"} disabled />
                    )}
                  </div>

                  <div>
                    <Label htmlFor="last_name">Last Name</Label>
                    {isEditing ? (
                      <Input
                        id="last_name"
                        value={editForm.last_name || ""}
                        onChange={(e) => setEditForm({ ...editForm, last_name: e.target.value })}
                      />
                    ) : (
                      <Input value={profile?.last_name || "-"} disabled />
                    )}
                  </div>

                  <div>
                    <Label htmlFor="background_field">Background/Field of Study or Work</Label>
                    {isEditing ? (
                      <Input
                        id="background_field"
                        value={editForm.background_field || ""}
                        onChange={(e) => setEditForm({ ...editForm, background_field: e.target.value })}
                        placeholder="e.g., Computer Science, Marketing, Medicine"
                      />
                    ) : (
                      <Input value={profile?.background_field || "-"} disabled />
                    )}
                  </div>

                  <div>
                    <Label htmlFor="technical_skills">Technical Skills</Label>
                    {isEditing ? (
                      <Input
                        id="technical_skills"
                        value={editForm.technical_skills || ""}
                        onChange={(e) => setEditForm({ ...editForm, technical_skills: e.target.value })}
                        placeholder="e.g., Python, React, UI/UX Design, Business Strategy"
                      />
                    ) : (
                      <Input value={profile?.technical_skills || "-"} disabled />
                    )}
                  </div>

                  <div>
                    <Label htmlFor="startup_experience">Previous Startup Experience</Label>
                    {isEditing ? (
                      <Select
                        value={editForm.startup_experience || ""}
                        onValueChange={(value) => setEditForm({ ...editForm, startup_experience: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="No">No</SelectItem>
                          <SelectItem value="Yes - Failed">Yes - Failed</SelectItem>
                          <SelectItem value="Yes - Successful">Yes - Successful</SelectItem>
                          <SelectItem value="Yes - Multiple">Yes - Multiple</SelectItem>
                        </SelectContent>
                      </Select>
                    ) : (
                      <Input value={profile?.startup_experience || "-"} disabled />
                    )}
                  </div>
                </div>

                {/* Startup Info */}
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="startup_name">Startup Name</Label>
                    {isEditing ? (
                      <Input
                        id="startup_name"
                        value={editForm.startup_name || ""}
                        onChange={(e) => setEditForm({ ...editForm, startup_name: e.target.value })}
                        placeholder="Current or previous startup name"
                      />
                    ) : (
                      <Input value={profile?.startup_name || "-"} disabled />
                    )}
                  </div>

                  <div>
                    <Label htmlFor="startup_description">Brief Startup Description</Label>
                    {isEditing ? (
                      <Textarea
                        id="startup_description"
                        value={editForm.startup_description || ""}
                        onChange={(e) => setEditForm({ ...editForm, startup_description: e.target.value })}
                        placeholder="One-line description of your startup"
                        rows={2}
                      />
                    ) : (
                      <Textarea value={profile?.startup_description || "-"} disabled rows={2} />
                    )}
                  </div>

                  <div>
                    <Label htmlFor="target_industry">Target Industry</Label>
                    {isEditing ? (
                      <Select
                        value={editForm.target_industry || ""}
                        onValueChange={(value) => setEditForm({ ...editForm, target_industry: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Healthtech">Healthtech</SelectItem>
                          <SelectItem value="Edtech">Edtech</SelectItem>
                          <SelectItem value="Fintech">Fintech</SelectItem>
                          <SelectItem value="E-commerce">E-commerce</SelectItem>
                          <SelectItem value="SaaS">SaaS</SelectItem>
                          <SelectItem value="AI/ML">AI/ML</SelectItem>
                          <SelectItem value="Gaming">Gaming</SelectItem>
                          <SelectItem value="Social Media">Social Media</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    ) : (
                      <Input value={profile?.target_industry || "-"} disabled />
                    )}
                  </div>

                  <div>
                    <Label htmlFor="target_customer">Target Customer Type</Label>
                    {isEditing ? (
                      <Select
                        value={editForm.target_customer || ""}
                        onValueChange={(value) => setEditForm({ ...editForm, target_customer: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select customer type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Consumers">Consumers</SelectItem>
                          <SelectItem value="SMBs">SMBs</SelectItem>
                          <SelectItem value="Enterprise">Enterprise</SelectItem>
                          <SelectItem value="Students">Students</SelectItem>
                          <SelectItem value="Developers">Developers</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    ) : (
                      <Input value={profile?.target_customer || "-"} disabled />
                    )}
                  </div>

                  <div>
                    <Label htmlFor="current_stage">Current Stage</Label>
                    {isEditing ? (
                      <Select
                        value={editForm.current_stage || ""}
                        onValueChange={(value) => setEditForm({ ...editForm, current_stage: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select current stage" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Idea">Idea</SelectItem>
                          <SelectItem value="MVP">MVP</SelectItem>
                          <SelectItem value="Beta">Beta</SelectItem>
                          <SelectItem value="Launched">Launched</SelectItem>
                          <SelectItem value="Revenue-generating">Revenue-generating</SelectItem>
                        </SelectContent>
                      </Select>
                    ) : (
                      <Input value={profile?.current_stage || "-"} disabled />
                    )}
                  </div>

                  <div>
                    <Label htmlFor="team_size">Team Size</Label>
                    {isEditing ? (
                      <Select
                        value={editForm.team_size || ""}
                        onValueChange={(value) => setEditForm({ ...editForm, team_size: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select team size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Solo founder">Solo founder</SelectItem>
                          <SelectItem value="2-3 people">2-3 people</SelectItem>
                          <SelectItem value="4-10 people">4-10 people</SelectItem>
                          <SelectItem value="10+ people">10+ people</SelectItem>
                        </SelectContent>
                      </Select>
                    ) : (
                      <Input value={profile?.team_size || "-"} disabled />
                    )}
                  </div>

                  <div>
                    <Label htmlFor="tech_stack">Tech Stack/AI Models Used</Label>
                    {isEditing ? (
                      <Input
                        id="tech_stack"
                        value={editForm.tech_stack || ""}
                        onChange={(e) => setEditForm({ ...editForm, tech_stack: e.target.value })}
                        placeholder="e.g., React, Node.js, OpenAI GPT-4"
                      />
                    ) : (
                      <Input value={profile?.tech_stack || "-"} disabled />
                    )}
                  </div>

                  <div>
                    <Label htmlFor="funding_raised">Funding Raised</Label>
                    {isEditing ? (
                      <Input
                        id="funding_raised"
                        value={editForm.funding_raised || ""}
                        onChange={(e) => setEditForm({ ...editForm, funding_raised: e.target.value })}
                        placeholder="e.g., $50K, Pre-seed, Series A"
                      />
                    ) : (
                      <Input value={profile?.funding_raised || "-"} disabled />
                    )}
                  </div>
                </div>

                <div className="col-span-full">
                  <div>
                    <span className="font-semibold">Member Since:</span>
                    <span className="ml-2 text-slate-700">
                      {profile?.created_at ? new Date(profile?.created_at).toLocaleDateString() : "-"}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* User Ideas Section */}
        <h2 className="text-2xl font-bold mb-4 text-slate-900">Your Startup Ideas</h2>
        <SampleStartupIdeas />
      </div>
    </div>
  );
}
