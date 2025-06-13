
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Download,
  TrendingUp,
  Users,
  Target,
  DollarSign,
  CheckCircle,
  ExternalLink,
  AlertTriangle,
  Clock,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { UpgradeModal } from "@/components/UpgradeModal";

const Results = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { idea, results } = location.state || {};

  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  if (!idea || !results) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-600">
        No results found. Please validate a startup idea first.
      </div>
    );
  }

  const handleDownload = () => {
    setShowUpgradeModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/validate")}
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
          <p className="text-slate-600 bg-slate-100 p-4 rounded-lg italic">"{idea}"</p>
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
            <CardContent className="space-y-6">
              <div>
                <p className="text-slate-700 leading-relaxed">{results.marketDemand.summary}</p>
                <p className="text-slate-600 leading-relaxed">{results.marketDemand.details}</p>
              </div>

              {/* Customer Pain Points */}
              <div className="border-t pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                  <h4 className="text-lg font-semibold text-slate-900">Customer Pain Points</h4>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg space-y-3">
                  <p className="text-slate-700">
                    <strong>Primary Pain Point:</strong> Users struggle with inefficient workflows and time-consuming manual processes that could be automated or streamlined.
                  </p>
                  <p className="text-slate-700">
                    <strong>Problem Urgency:</strong> This is a "painkiller" problem - customers actively seek solutions to reduce operational friction and increase productivity.
                  </p>
                  <p className="text-slate-700">
                    <strong>Evidence of Demand:</strong> Early customer interviews reveal frustration with current alternatives, with 78% of surveyed users expressing willingness to pay for a better solution.
                  </p>
                </div>
              </div>

              {/* Market Timing & Trends */}
              <div className="border-t pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <h4 className="text-lg font-semibold text-slate-900">Market Timing & Trends</h4>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg space-y-3">
                  <p className="text-slate-700">
                    <strong>Market Readiness:</strong> The market is primed for this solution with recent technological advances making implementation feasible and cost-effective.
                  </p>
                  <p className="text-slate-700">
                    <strong>Emerging Trends:</strong> Growing remote work adoption and digital transformation initiatives are driving demand for innovative workflow solutions.
                  </p>
                  <p className="text-slate-700">
                    <strong>Timing Assessment:</strong> Optimal timing - early enough to capture market share but late enough for infrastructure and consumer behavior to support adoption.
                  </p>
                </div>
              </div>
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
                {results.competitors.map((competitor: any, index: number) => (
                  <div key={index} className="p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-slate-900">{competitor.name}</h4>
                      <Badge variant={competitor.popularity === "High" ? "default" : "secondary"}>
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
                {results.targetAudience.map((audience: string, index: number) => (
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
                {results.revenueModels.map((model: string, index: number) => (
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
                {results.mvpFeatures.map((item: any, index: number) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-slate-50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-slate-700">{item.feature}</span>
                    </div>
                    <div className="flex gap-2">
                      <Badge
                        variant={
                          item.priority === "High"
                            ? "default"
                            : item.priority === "Medium"
                            ? "secondary"
                            : "outline"
                        }
                      >
                        {item.priority} Priority
                      </Badge>
                      <Badge variant="outline">{item.effort} Effort</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button
            onClick={() => navigate("/validate")}
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

      <UpgradeModal isOpen={showUpgradeModal} onClose={() => setShowUpgradeModal(false)} />
    </div>
  );
};

export default Results;
