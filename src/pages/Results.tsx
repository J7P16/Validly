
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, TrendingUp, Users, Target, DollarSign, CheckCircle, ExternalLink } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { UpgradeModal } from "@/components/UpgradeModal";

const Results = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { idea } = location.state || { idea: "Sample startup idea" };
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  // Mock data - in real app, this would come from GPT-4 API
  const mockResults = {
    marketDemand: {
      score: 8.5,
      summary: "Your idea addresses a significant market opportunity in the remote work sector, which has grown by 159% since 2019. The global co-living market is projected to reach $13.9 billion by 2025, with a CAGR of 17.4%. Digital nomads represent a rapidly expanding demographic, with over 5 million nomads globally spending an average of $50,000 annually on accommodation and workspace solutions.",
      details: "The concept combines two high-growth markets: remote work infrastructure and community-driven living. Key market drivers include the permanent shift to hybrid work models, rising housing costs in major cities, and the desire for work-life integration among millennials and Gen Z professionals."
    },
    competitors: [
      {
        name: "Selina",
        description: "Global hospitality brand offering co-living and co-working spaces for digital nomads",
        popularity: "High",
        locations: "100+ locations worldwide",
        pricing: "$40-80/night"
      },
      {
        name: "Outsite",
        description: "Membership-based co-living network for remote workers and digital nomads",
        popularity: "Medium",
        locations: "50+ cities globally",
        pricing: "$200/month membership"
      },
      {
        name: "Roam",
        description: "Flexible living spaces with month-to-month leases for location-independent professionals",
        popularity: "Medium",
        locations: "15+ cities",
        pricing: "$1,800-3,500/month"
      }
    ],
    targetAudience: [
      "Digital nomads and remote workers (25-40 years old)",
      "Freelancers and consultants seeking community",
      "Remote employees from tech companies",
      "Entrepreneurs and startup founders",
      "International students and young professionals",
      "Companies looking for team retreat locations"
    ],
    revenueModels: [
      "Subscription membership model ($99-199/month)",
      "Per-night booking fees (15-20% commission)",
      "Corporate packages for team retreats",
      "Premium services (concierge, local experiences)",
      "Co-working day passes for non-residents",
      "Partnership revenue with local businesses"
    ],
    mvpFeatures: [
      { feature: "Property search and booking system", priority: "High", effort: "High" },
      { feature: "User profiles and verification", priority: "High", effort: "Medium" },
      { feature: "Basic messaging between hosts and guests", priority: "High", effort: "Medium" },
      { feature: "Payment processing and escrow", priority: "High", effort: "High" },
      { feature: "Review and rating system", priority: "Medium", effort: "Medium" },
      { feature: "Community features (local events, groups)", priority: "Medium", effort: "High" },
      { feature: "Mobile app for bookings", priority: "Medium", effort: "High" },
      { feature: "Property management dashboard", priority: "Low", effort: "Medium" }
    ]
  };

  const handleDownload = () => {
    setShowUpgradeModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/validate')}
            className="text-slate-600 hover:text-slate-900"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Validate Another Idea
          </Button>
          
          <Button
            onClick={handleDownload}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6"
          >
            <Download className="w-4 h-4 mr-2" />
            Download PDF Report
          </Button>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Validation Results</h1>
          <p className="text-slate-600 bg-slate-100 p-4 rounded-lg italic">
            "{idea}"
          </p>
        </div>

        <div className="space-y-8">
          {/* Market Demand */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                Market Demand
                <Badge variant="secondary" className="bg-green-100 text-green-700">
                  {mockResults.marketDemand.score}/10
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700 leading-relaxed">
                {mockResults.marketDemand.summary}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {mockResults.marketDemand.details}
              </p>
            </CardContent>
          </Card>

          {/* Competitors */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl flex items-center justify-center">
                  <Target className="w-5 h-5 text-orange-600" />
                </div>
                Top 3 Competitors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockResults.competitors.map((competitor, index) => (
                  <div key={index} className="p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-slate-900">{competitor.name}</h4>
                      <Badge variant={competitor.popularity === 'High' ? 'default' : 'secondary'}>
                        {competitor.popularity} Popularity
                      </Badge>
                    </div>
                    <p className="text-slate-600 mb-3">{competitor.description}</p>
                    <div className="flex gap-4 text-sm text-slate-500">
                      <span>{competitor.locations}</span>
                      <span>•</span>
                      <span>{competitor.pricing}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Target Audience */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                Target Audience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {mockResults.targetAudience.map((audience, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">{audience}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Revenue Models */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-purple-600" />
                </div>
                Revenue Model Suggestions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {mockResults.revenueModels.map((model, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">{model}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* MVP Features */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center">
                  <ExternalLink className="w-5 h-5 text-cyan-600" />
                </div>
                MVP Feature Set
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockResults.mvpFeatures.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-slate-700">{item.feature}</span>
                    </div>
                    <div className="flex gap-2">
                      <Badge variant={item.priority === 'High' ? 'default' : item.priority === 'Medium' ? 'secondary' : 'outline'}>
                        {item.priority} Priority
                      </Badge>
                      <Badge variant="outline">
                        {item.effort} Effort
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button
            onClick={() => navigate('/validate')}
            variant="outline"
            size="lg"
            className="mr-4"
          >
            Validate Another Idea
          </Button>
          <Button
            onClick={handleDownload}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Full Report
          </Button>
        </div>
      </div>

      <UpgradeModal 
        isOpen={showUpgradeModal} 
        onClose={() => setShowUpgradeModal(false)} 
      />
    </div>
  );
};

export default Results;
