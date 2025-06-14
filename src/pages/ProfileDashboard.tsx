
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface UserIdea {
  id: string;
  idea: string;
  ai_response: any;
  created_at: string;
}
import SampleStartupIdeas from "@/components/SampleStartupIdeas";

export default function ProfileDashboard() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  // Fetch profile info
  const { data: profile } = useQuery({
    queryKey: ["profile", user?.id],
    queryFn: async () => {
      if (!user) return null;
      const { data } = await supabase
        .from("profiles")
        .select("first_name, last_name, created_at")
        .eq("id", user.id)
        .maybeSingle();
      return data;
    },
    enabled: !!user,
  });

  // Dummy plan value
  const pricingPlan = "Free"; // Replace with real plan logic if available

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

  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
    }
  }, [user, loading, navigate]);

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
          {/* Personal Info */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <div className="mb-2">
                  <span className="font-semibold">Email:</span>
                  <span className="ml-2 text-slate-700">{user?.email}</span>
                </div>
                <div className="mb-2">
                  <span className="font-semibold">Name:</span>
                  <span className="ml-2 text-slate-700">{profile?.first_name || "-"} {profile?.last_name || ""}</span>
                </div>
                <div className="mb-2">
                  <span className="font-semibold">Member Since:</span>
                  <span className="ml-2 text-slate-700">{profile?.created_at ? new Date(profile?.created_at).toLocaleDateString() : "-"}</span>
                </div>
              </div>
            </CardContent>
          </Card>
          {/* Pricing Plan */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Pricing Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-2">
                <Badge className={pricingPlan === "Pro" ? "bg-purple-600" : "bg-blue-600"}>
                  {pricingPlan}
                </Badge>
              </div>
              <div className="text-slate-600">
                {pricingPlan === "Pro"
                  ? "Thanks for supporting with a Pro subscription!"
                  : "Enjoy basic access to all essential features."}
              </div>
              <Button variant="outline" className="mt-4 w-full" onClick={() => navigate("/pricing")}>
                Manage Plan
              </Button>
            </CardContent>
          </Card>
          {/* Placeholder for other info */}
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
        </div>
        {/* User Ideas Section */}
        <h2 className="text-2xl font-bold mb-4 text-slate-900">Your Startup Ideas</h2>
        {/* OLD section for userIdeas/cards removed in favor of sample */}
        <SampleStartupIdeas />
      </div>
    </div>
  );
}
