import { useState, useEffect } from 'react';
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ProfileData {
  id: string;
  first_name: string | null;
  last_name: string | null;
  background_field: string | null;
  technical_skills: string | null;
  startup_experience: boolean | null;
  startup_name: string | null;
  startup_description: string | null;
  target_industry: string | null;
  target_customer: string | null;
  current_stage: string | null;
  team_size: string | null;
  tech_stack: string | null;
  funding_raised: string | null;
  created_at: string;
  updated_at: string;
}

const ProfileDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState<Partial<ProfileData>>({});

  useEffect(() => {
    if (!user) {
      navigate('/auth');
    }
  }, [user, navigate]);

  // Fetch user profile data
  const { data: profile, isLoading, refetch } = useQuery({
    queryKey: ['profile', user?.id],
    queryFn: async () => {
      if (!user?.id) return null;
      
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();
      
      if (error) {
        console.error('Error fetching profile:', error);
        return null;
      }
      
      return data as ProfileData;
    },
    enabled: !!user?.id,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditedProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    if (!user?.id) return;

    const { data, error } = await supabase
      .from('profiles')
      .update(editedProfile)
      .eq('id', user.id)
      .select()
      .single();

    if (error) {
      console.error('Error updating profile:', error);
      return;
    }

    setIsEditing(false);
    setEditedProfile({});
    refetch(); // Refresh the profile data
  };

  if (isLoading) {
    return <div>Loading profile...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-lg font-semibold">Profile Dashboard</div>
          <Button variant="outline" onClick={() => navigate('/')}>
            Back to Home
          </Button>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome, {profile?.first_name || 'User'}!
          </h1>
          <p className="text-gray-600">Manage your profile information here.</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Pricing Plan</h2>
          <p className="text-gray-700">
            You are currently on the <span className="font-medium">Free</span> plan. Upgrade to unlock more features.
          </p>
          <Button className="mt-4" onClick={() => navigate('/pricing')}>
            Upgrade Plan
          </Button>
        </div>

        {/* Personal Information */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Personal Information</h2>
            <Button
              variant={isEditing ? "default" : "outline"}
              onClick={isEditing ? handleSave : () => setIsEditing(true)}
              disabled={isEditing && !Object.keys(editedProfile).length}
            >
              {isEditing ? "Save Changes" : "Edit Profile"}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="first_name">First Name</Label>
              <Input
                type="text"
                id="first_name"
                name="first_name"
                defaultValue={profile?.first_name || ''}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>
            <div>
              <Label htmlFor="last_name">Last Name</Label>
              <Input
                type="text"
                id="last_name"
                name="last_name"
                defaultValue={profile?.last_name || ''}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>
            <div>
              <Label htmlFor="background_field">Background Field</Label>
              <Input
                type="text"
                id="background_field"
                name="background_field"
                defaultValue={profile?.background_field || ''}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>
            <div>
              <Label htmlFor="technical_skills">Technical Skills</Label>
              <Input
                type="text"
                id="technical_skills"
                name="technical_skills"
                defaultValue={profile?.technical_skills || ''}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>
            <div>
              <Label htmlFor="startup_experience">Startup Experience</Label>
              <Input
                type="text"
                id="startup_experience"
                name="startup_experience"
                defaultValue={profile?.startup_experience || ''}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>
            <div>
              <Label htmlFor="startup_name">Startup Name</Label>
              <Input
                type="text"
                id="startup_name"
                name="startup_name"
                defaultValue={profile?.startup_name || ''}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>
             <div>
              <Label htmlFor="startup_description">Startup Description</Label>
              <Input
                type="text"
                id="startup_description"
                name="startup_description"
                defaultValue={profile?.startup_description || ''}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>
             <div>
              <Label htmlFor="target_industry">Target Industry</Label>
              <Input
                type="text"
                id="target_industry"
                name="target_industry"
                defaultValue={profile?.target_industry || ''}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>
             <div>
              <Label htmlFor="target_customer">Target Customer</Label>
              <Input
                type="text"
                id="target_customer"
                name="target_customer"
                defaultValue={profile?.target_customer || ''}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>
             <div>
              <Label htmlFor="current_stage">Current Stage</Label>
              <Input
                type="text"
                id="current_stage"
                name="current_stage"
                defaultValue={profile?.current_stage || ''}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>
             <div>
              <Label htmlFor="team_size">Team Size</Label>
              <Input
                type="text"
                id="team_size"
                name="team_size"
                defaultValue={profile?.team_size || ''}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>
             <div>
              <Label htmlFor="tech_stack">Tech Stack</Label>
              <Input
                type="text"
                id="tech_stack"
                name="tech_stack"
                defaultValue={profile?.tech_stack || ''}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>
             <div>
              <Label htmlFor="funding_raised">Funding Raised</Label>
              <Input
                type="text"
                id="funding_raised"
                name="funding_raised"
                defaultValue={profile?.funding_raised || ''}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;
