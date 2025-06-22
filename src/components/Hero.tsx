import { ArrowRight, Shield, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuthButton } from "@/components/AuthButton";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Fetch user profile data
  const { data: profile } = useQuery({
    queryKey: ['profile', user?.id],
    queryFn: async () => {
      if (!user?.id) return null;
      
      const { data, error } = await supabase
        .from('profiles')
        .select('first_name, last_name')
        .eq('id', user.id)
        .single();
      
      if (error) {
        console.error('Error fetching profile:', error);
        return null;
      }
      
      return data;
    },
    enabled: !!user?.id,
  });

  return (
    <div className="relative overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6 lg:px-8 border-b border-gray-100 bg-white/95 backdrop-blur-sm">
        <div className="flex lg:flex-1">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/6cb36510-1398-4282-8e94-048f5bda8f8c.png" 
              alt="Validly Logo" 
              className="h-10 w-10"
            />
            <span className="text-xl font-bold text-gray-900">Validly</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
          <div className="relative group">
            <button className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors">
              Product
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-2">
                <a href="#features" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Features</a>
                <Link to="/pricing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Pricing</Link>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">API</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Examples</a>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <button className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors">
              Company
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-2">
                <Link to="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">About</Link>
                <Link to="/privacy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Privacy Policy</Link>
                <Link to="/terms" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 lg:ml-8">
          {user && (
            <Button variant="ghost" onClick={() => navigate('/profile')}>
              Profile
            </Button>
          )}
          <AuthButton />
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        {/* Styled Validly Title */}
        <div className="flex justify-center mb-8">
          <div className="relative inline-block">
            <h2 className="text-6xl sm:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Validly
            </h2>
            {/* Double curved underline matching 100 emoji */}
            <div className="absolute -bottom-3 left-0 right-0">
              <svg viewBox="0 0 300 20" className="w-full h-5">
                <path 
                  d="M10 12 Q150 8 290 12" 
                  stroke="url(#gradient1)" 
                  strokeWidth="3" 
                  fill="none"
                  strokeLinecap="round"
                />
                <path 
                  d="M10 16 Q150 20 290 16" 
                  stroke="url(#gradient2)" 
                  strokeWidth="3" 
                  fill="none"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#6366F1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          {user && profile?.first_name ? (
            <>
              Hi <span className="text-blue-600">{profile.first_name}</span>,{" "}
              Create Powerful Startups With Data-Driven Validation
            </>
          ) : (
            "Create Powerful Startups With Data-Driven Validation"
          )}
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Validate your crazy startup ideas in real-time to improve growth, deliverability, reduce competition, and take over markets.
        </p>
        <div className="mt-10 flex items-center gap-x-6">
          <Link to="/validate">
            <Button size="lg" className="flex items-center gap-2">
              Get started
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
          <a href="#features" className="text-sm font-semibold leading-6 text-gray-900">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-[calc(50%-3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-14rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  );
};
