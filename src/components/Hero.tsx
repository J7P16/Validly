
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="px-4 py-20 text-center max-w-6xl mx-auto">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 text-sm font-medium mb-8">
        <Sparkles className="w-4 h-4" />
        AI-Powered Startup Validation
      </div>
      
      <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
        Validate your startup idea{" "}
        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          in seconds
        </span>{" "}
        with AI
      </h1>
      
      <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
        Get instant market validation, competitor analysis, and MVP recommendations 
        powered by advanced AI. Turn your idea into actionable insights today.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button 
          onClick={() => navigate('/validate')}
          size="lg"
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
        >
          Try Free Validation
          <ArrowRight className="w-5 h-5" />
        </Button>
        
        <p className="text-sm text-slate-500">
          No signup required • Get results in 30 seconds
        </p>
      </div>
      
      <div className="mt-16 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 h-24 bottom-0"></div>
        <img 
          src="/lovable-uploads/d98a6e52-f3fd-4318-ab9b-2e588da0e565.png" 
          alt="SaaS Validator Dashboard Preview - Startup Launch Illustration"
          className="rounded-2xl shadow-2xl border border-slate-200 max-w-4xl mx-auto w-full h-auto object-contain"
        />
      </div>
    </section>
  );
};
