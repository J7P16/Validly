
import { useState, useEffect } from "react";
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
  const [results, setResults] = useState(null);

  // Function to generate dynamic results based on the idea
  const generateResults = (userIdea: string) => {
    const lowerIdea = userIdea.toLowerCase();
    
    // Generate competitors based on idea keywords
    const generateCompetitors = () => {
      if (lowerIdea.includes('airbnb') || lowerIdea.includes('remote') || lowerIdea.includes('nomad') || lowerIdea.includes('co-living')) {
        return [
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
        ];
      } else if (lowerIdea.includes('food') || lowerIdea.includes('delivery') || lowerIdea.includes('restaurant')) {
        return [
          {
            name: "DoorDash",
            description: "Leading food delivery platform connecting restaurants with customers",
            popularity: "High",
            locations: "7,000+ cities globally",
            pricing: "20-30% commission"
          },
          {
            name: "Uber Eats",
            description: "Food delivery service integrated with ride-sharing platform",
            popularity: "High",
            locations: "6,000+ cities worldwide",
            pricing: "15-30% commission"
          },
          {
            name: "Grubhub",
            description: "Online food ordering and delivery marketplace for restaurants",
            popularity: "Medium",
            locations: "4,000+ cities in US",
            pricing: "10-20% commission"
          }
        ];
      } else if (lowerIdea.includes('fitness') || lowerIdea.includes('health') || lowerIdea.includes('workout')) {
        return [
          {
            name: "MyFitnessPal",
            description: "Comprehensive fitness and nutrition tracking application",
            popularity: "High",
            locations: "Global platform",
            pricing: "Freemium, $9.99/month premium"
          },
          {
            name: "Strava",
            description: "Social fitness tracking platform for runners and cyclists",
            popularity: "High",
            locations: "190+ countries",
            pricing: "Free/$5/month premium"
          },
          {
            name: "Nike Training Club",
            description: "Free fitness app with workout routines and training programs",
            popularity: "Medium",
            locations: "Global platform",
            pricing: "Free with premium features"
          }
        ];
      } else if (lowerIdea.includes('finance') || lowerIdea.includes('banking') || lowerIdea.includes('payment')) {
        return [
          {
            name: "Stripe",
            description: "Payment processing platform for online businesses",
            popularity: "High",
            locations: "46+ countries",
            pricing: "2.9% + 30¢ per transaction"
          },
          {
            name: "Square",
            description: "Point-of-sale and payment processing solutions",
            popularity: "High",
            locations: "US, Canada, Australia, UK",
            pricing: "2.6% + 10¢ per transaction"
          },
          {
            name: "PayPal",
            description: "Digital payment platform for online transactions",
            popularity: "High",
            locations: "200+ markets worldwide",
            pricing: "2.9% + fixed fee"
          }
        ];
      } else {
        // Generic competitors for other ideas
        return [
          {
            name: "Market Leader A",
            description: "Established player in the market with comprehensive solutions",
            popularity: "High",
            locations: "Multiple markets",
            pricing: "Premium pricing model"
          },
          {
            name: "Emerging Competitor B",
            description: "Fast-growing startup with innovative approach to the problem",
            popularity: "Medium",
            locations: "Key metropolitan areas",
            pricing: "Competitive pricing"
          },
          {
            name: "Niche Player C",
            description: "Specialized solution focusing on specific market segment",
            popularity: "Medium",
            locations: "Targeted regions",
            pricing: "Value-based pricing"
          }
        ];
      }
    };

    // Generate target audience based on idea keywords
    const generateTargetAudience = () => {
      if (lowerIdea.includes('remote') || lowerIdea.includes('nomad') || lowerIdea.includes('co-living')) {
        return [
          "Digital nomads and remote workers (25-40 years old)",
          "Freelancers and consultants seeking community",
          "Remote employees from tech companies",
          "Entrepreneurs and startup founders",
          "International students and young professionals",
          "Companies looking for team retreat locations"
        ];
      } else if (lowerIdea.includes('food') || lowerIdea.includes('delivery') || lowerIdea.includes('restaurant')) {
        return [
          "Busy professionals who order delivery regularly",
          "Families looking for convenient meal solutions",
          "College students and young adults",
          "Restaurant owners wanting to expand reach",
          "Food enthusiasts seeking variety",
          "Time-constrained individuals and working parents"
        ];
      } else if (lowerIdea.includes('fitness') || lowerIdea.includes('health') || lowerIdea.includes('workout')) {
        return [
          "Health-conscious individuals (18-45 years old)",
          "Busy professionals seeking efficient workouts",
          "Fitness beginners looking for guidance",
          "Athletes and fitness enthusiasts",
          "People with specific health goals",
          "Gym-goers and home workout practitioners"
        ];
      } else if (lowerIdea.includes('finance') || lowerIdea.includes('banking') || lowerIdea.includes('payment')) {
        return [
          "Small business owners and entrepreneurs",
          "E-commerce merchants and online sellers",
          "Freelancers and gig economy workers",
          "Tech-savvy consumers seeking convenience",
          "International businesses needing cross-border payments",
          "Financial institutions looking for technology solutions"
        ];
      } else {
        return [
          "Early adopters and technology enthusiasts",
          "Professionals in the target industry",
          "Small to medium businesses",
          "Consumers seeking innovative solutions",
          "Tech-savvy individuals (25-45 years old)",
          "Organizations looking to improve efficiency"
        ];
      }
    };

    // Generate revenue models based on idea type
    const generateRevenueModels = () => {
      if (lowerIdea.includes('marketplace') || lowerIdea.includes('platform') || lowerIdea.includes('airbnb')) {
        return [
          "Commission-based model (5-15% per transaction)",
          "Subscription tiers for premium features",
          "Listing fees for premium placement",
          "Payment processing fees",
          "Advertisement revenue from featured listings",
          "Premium membership with additional benefits"
        ];
      } else if (lowerIdea.includes('saas') || lowerIdea.includes('software') || lowerIdea.includes('app')) {
        return [
          "Freemium model with premium subscriptions",
          "Tiered monthly/annual subscription plans",
          "Usage-based pricing model",
          "Enterprise licensing deals",
          "API access fees for developers",
          "White-label licensing to other companies"
        ];
      } else if (lowerIdea.includes('e-commerce') || lowerIdea.includes('retail') || lowerIdea.includes('delivery')) {
        return [
          "Product markup and retail margins",
          "Delivery and service fees",
          "Subscription boxes for regular customers",
          "Affiliate commissions from partners",
          "Premium membership with benefits",
          "Advertising fees from brands and suppliers"
        ];
      } else {
        return [
          "Subscription-based recurring revenue",
          "Transaction-based fee structure",
          "Freemium model with premium upgrades",
          "Enterprise and business packages",
          "Partnership and affiliate revenue",
          "Advertising and sponsored content"
        ];
      }
    };

    // Generate MVP features based on idea complexity
    const generateMVPFeatures = () => {
      const commonFeatures = [
        { feature: "User registration and authentication", priority: "High", effort: "Medium" },
        { feature: "Core functionality implementation", priority: "High", effort: "High" },
        { feature: "Basic user interface and navigation", priority: "High", effort: "Medium" },
        { feature: "Payment processing integration", priority: "High", effort: "High" },
        { feature: "User profile and settings management", priority: "Medium", effort: "Medium" },
        { feature: "Search and filtering capabilities", priority: "Medium", effort: "Medium" },
        { feature: "Mobile-responsive design", priority: "Medium", effort: "Medium" },
        { feature: "Basic analytics and reporting", priority: "Low", effort: "Medium" }
      ];

      if (lowerIdea.includes('marketplace') || lowerIdea.includes('platform')) {
        return [
          { feature: "User registration for buyers and sellers", priority: "High", effort: "Medium" },
          { feature: "Product/service listing creation", priority: "High", effort: "High" },
          { feature: "Search and discovery functionality", priority: "High", effort: "Medium" },
          { feature: "Secure payment processing", priority: "High", effort: "High" },
          { feature: "Rating and review system", priority: "Medium", effort: "Medium" },
          { feature: "Messaging between users", priority: "Medium", effort: "Medium" },
          { feature: "Mobile app for iOS and Android", priority: "Medium", effort: "High" },
          { feature: "Admin dashboard for platform management", priority: "Low", effort: "Medium" }
        ];
      } else if (lowerIdea.includes('social') || lowerIdea.includes('community')) {
        return [
          { feature: "User profiles and authentication", priority: "High", effort: "Medium" },
          { feature: "Content creation and sharing", priority: "High", effort: "High" },
          { feature: "News feed and content discovery", priority: "High", effort: "High" },
          { feature: "Social interactions (likes, comments)", priority: "High", effort: "Medium" },
          { feature: "Friend/follower connections", priority: "Medium", effort: "Medium" },
          { feature: "Push notifications system", priority: "Medium", effort: "Medium" },
          { feature: "Content moderation tools", priority: "Medium", effort: "High" },
          { feature: "Analytics and engagement metrics", priority: "Low", effort: "Medium" }
        ];
      } else {
        return commonFeatures;
      }
    };

    return {
      marketDemand: {
        score: Math.floor(Math.random() * 3) + 7.5, // Random score between 7.5-10
        summary: `Your idea shows strong potential in the current market landscape. Based on recent market analysis, there's significant demand for solutions in this space, with growing consumer interest and favorable market conditions. The timing appears optimal given current industry trends and technological advancements.`,
        details: `Market research indicates this sector is experiencing robust growth, driven by changing consumer behaviors and technological adoption. Key market drivers include digital transformation trends, increased demand for efficiency, and evolving user expectations. The addressable market shows promising expansion potential with multiple monetization opportunities.`
      },
      competitors: generateCompetitors(),
      targetAudience: generateTargetAudience(),
      revenueModels: generateRevenueModels(),
      mvpFeatures: generateMVPFeatures()
    };
  };

  useEffect(() => {
    // Generate results when component mounts
    const generatedResults = generateResults(idea);
    setResults(generatedResults);
  }, [idea]);

  const handleDownload = () => {
    setShowUpgradeModal(true);
  };

  if (!results) {
    return <div>Loading...</div>;
  }

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
                  {results.marketDemand.score}/10
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700 leading-relaxed">
                {results.marketDemand.summary}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {results.marketDemand.details}
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
                {results.competitors.map((competitor, index) => (
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
                {results.targetAudience.map((audience, index) => (
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
                {results.revenueModels.map((model, index) => (
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
                {results.mvpFeatures.map((item, index) => (
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
