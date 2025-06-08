
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, TrendingUp, Target, Users, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
    title: "Market Analysis",
    description: "Get comprehensive market research and trend analysis for your startup idea in seconds."
  },
  {
    icon: <Target className="w-8 h-8 text-green-600" />,
    title: "Competitor Intelligence", 
    description: "Discover your competition, their strengths, weaknesses, and market positioning."
  },
  {
    icon: <Users className="w-8 h-8 text-purple-600" />,
    title: "Target Audience Insights",
    description: "Identify and understand your ideal customers with detailed demographic analysis."
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-600" />,
    title: "MVP Roadmap",
    description: "Get a prioritized feature list and development roadmap for your minimum viable product."
  },
  {
    icon: <Shield className="w-8 h-8 text-red-600" />,
    title: "Risk Assessment",
    description: "Understand potential challenges and risks before you invest time and money."
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-indigo-600" />,
    title: "Validation Score",
    description: "Receive a comprehensive score based on market demand, competition, and feasibility."
  }
];

export const Features = () => {
  return (
    <section id="features" className="px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Everything you need to validate your startup
          </h2>
          <p className="text-xl text-slate-600">
            Comprehensive validation tools powered by data and market intelligence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
