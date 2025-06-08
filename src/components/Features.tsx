
import { Brain, Target, Zap, Download, Users, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Advanced GPT-4 analysis provides deep market understanding and validation insights for your startup idea."
  },
  {
    icon: Zap,
    title: "Instant MVP Suggestions",
    description: "Get a prioritized feature list and development roadmap to build your minimum viable product efficiently."
  },
  {
    icon: Download,
    title: "Exportable Reports",
    description: "Download comprehensive PDF reports with all validation insights to share with investors and team members."
  },
  {
    icon: Target,
    title: "Competitor Analysis",
    description: "Discover your top competitors, their strengths, and market positioning to find your competitive advantage."
  },
  {
    icon: Users,
    title: "Target Audience",
    description: "Identify your ideal customers, their pain points, and how to reach them effectively in the market."
  },
  {
    icon: TrendingUp,
    title: "Revenue Models",
    description: "Explore proven monetization strategies and revenue streams tailored to your specific business idea."
  }
];

export const Features = () => {
  return (
    <section className="px-4 py-20 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Everything you need to validate your startup
        </h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Our AI analyzes thousands of data points to give you actionable insights about your business idea
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-blue-600" />
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
    </section>
  );
};
