
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Lightbulb, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Validate = () => {
  const [idea, setIdea] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  // Redirect to auth if not logged in
  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  // Show loading while checking auth status
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  // Don't render if user is not logged in (will redirect)
  if (!user) {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!idea.trim()) return;
    
    setIsLoading(true);
    
    // Simulate API call
    try {
      const response = await fetch("http://localhost:5001/api/generateInsights", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idea }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate insights.");
      }

      const data = await response.json();
      navigate("/results", { state: { idea, results: data } });
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-8 text-slate-600 hover:text-slate-900"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="w-8 h-8 text-blue-600" />
            </div>
            <CardTitle className="text-3xl font-bold text-slate-900 mb-2">
              Describe Your Startup Idea
            </CardTitle>
            <p className="text-slate-600">
              Share your vision and let our AI provide comprehensive validation insights
            </p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="idea" className="block text-sm font-medium text-slate-700 mb-2">
                  Your Startup Idea
                </label>
                <Textarea
                  id="idea"
                  value={idea}
                  onChange={(e) => setIdea(e.target.value)}
                  placeholder="e.g., Airbnb for remote workers - a platform that connects digital nomads with co-living spaces designed for productivity. Features include high-speed internet, dedicated workspaces, and community events."
                  className="min-h-[150px] resize-none border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
                <p className="text-xs text-slate-500 mt-2">
                  💡 Tip: Include your target audience, key features, and what problem you're solving
                </p>
              </div>

              <Button
                type="submit"
                disabled={!idea.trim() || isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Analyzing Your Idea...
                  </>
                ) : (
                  'Validate Idea'
                )}
              </Button>
            </form>

            <div className="mt-8 p-4 bg-blue-50 rounded-xl">
              <h4 className="font-semibold text-blue-900 mb-2">What you'll get:</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Market demand analysis</li>
                <li>• Top 3 competitor breakdown</li>
                <li>• Target audience insights</li>
                <li>• Revenue model suggestions</li>
                <li>• MVP feature prioritization</li>
                <li>• Downloadable PDF report</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Validate;
