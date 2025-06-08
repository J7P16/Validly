
import { ArrowLeft, Users, Target, Lightbulb, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Footer } from "@/components/Footer";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="px-6 py-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
          <span className="text-xl font-bold text-gray-900">Validly</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              About Validly
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Validly was developed to empower entrepreneurs with data-driven insights 
              to validate their startup ideas before they invest their precious time and resources.
            </p>
          </div>

          {/* Mission Section */}
          <section className="mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Here's the simple truth: great ideas deserve the best chance of success. 
                Especially in the golden age of AI, too many promising startups fail not because of poor execution, but because 
                they never properly validated their market fit. Our platform leverages 
                advanced AI and comprehensive market data to provide entrepreneurs with 
                the insights they need to make informed decisions about their business ideas.
              </p>
            </div>
          </section>

          {/* Values */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Target className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">Data-Driven Decisions</h3>
                  </div>
                  <p className="text-slate-600">
                    Validly believes in the power of data to guide strategic decisions. 
                    Every insight we provide is backed by comprehensive market research and analysis.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">Entrepreneur First</h3>
                  </div>
                  <p className="text-slate-600">
                    We understand the challenges of building a startup. Our tools are designed 
                    by entrepreneurs, for entrepreneurs, with simplicity and effectiveness in mind.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">Innovation</h3>
                  </div>
                  <p className="text-slate-600">
                    Validly continuously evolves its platform to incorporate the latest technology 
                    and market intelligence to provide the most accurate validation insights.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">Trust & Transparency</h3>
                  </div>
                  <p className="text-slate-600">
                    Validly maintains the highest standards of data security and privacy. 
                    Your ideas are safe with us, and our validation methods are always transparent.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Hi, I'm John Patrick, the founder and developer of Validly! Like many of you reading this, I'm also a
                startup enthusiast. The idea of Validly was born from my frustration of seeing many of my
                great ideas fail due to them being taken or being overshadowed by large markets. So, I decided
                decided to create a platform that democratizes access to professional-grade market 
                research and validation tools to help other entrepreneurs find their spark.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Validate Your Idea?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join many of the entrepreneurs who trust Validly to bring their ideas to life.
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => navigate('/validate')}
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Start Validating
              </Button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
