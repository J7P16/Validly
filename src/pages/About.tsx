
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 lg:px-8 border-b border-gray-100 bg-white/95 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <img 
            src="/lovable-uploads/6cb36510-1398-4282-8e94-048f5bda8f8c.png" 
            alt="Validly Logo" 
            className="h-10 w-10"
          />
          <span className="text-xl font-bold text-gray-900">Validly</span>
        </div>
        
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="text-slate-600 hover:text-slate-900"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto py-16 px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            About Validly
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Empowering entrepreneurs and innovators with AI-powered startup validation tools
          </p>
        </div>

        <div className="space-y-12">
          <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg"></div>
              Our Mission
            </h2>
            <p className="text-gray-700 leading-8 text-lg">
              At Validly, we're dedicated to empowering entrepreneurs and innovators by providing them with the tools they need to validate their startup ideas quickly and effectively. We believe that every great idea deserves a chance to succeed, and we're here to help you make that happen.
            </p>
          </section>

          <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg"></div>
              What We Do
            </h2>
            <p className="text-gray-700 leading-8 text-lg mb-6">
              Our AI-powered platform analyzes your startup idea, providing you with valuable insights into market demand, competitor analysis, target audience, and potential revenue models. We help you prioritize your MVP features and create a solid foundation for your business.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="font-semibold text-gray-900">Market Analysis:</span>
                </div>
                <p className="text-gray-600 ml-5">Understand the potential of your market.</p>
                
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="font-semibold text-gray-900">Competitor Insights:</span>
                </div>
                <p className="text-gray-600 ml-5">Identify and analyze your top competitors.</p>
                
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="font-semibold text-gray-900">Target Audience:</span>
                </div>
                <p className="text-gray-600 ml-5">Define and understand your ideal customers.</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  <span className="font-semibold text-gray-900">MVP Prioritization:</span>
                </div>
                <p className="text-gray-600 ml-5">Focus on the essential features for your initial product.</p>
                
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  <span className="font-semibold text-gray-900">Revenue Models:</span>
                </div>
                <p className="text-gray-600 ml-5">Discover sustainable monetization strategies.</p>
                
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  <span className="font-semibold text-gray-900">PDF Reports:</span>
                </div>
                <p className="text-gray-600 ml-5">Download comprehensive analysis documents.</p>
              </div>
            </div>
          </section>

          <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"></div>
              Our Team
            </h2>
            <p className="text-gray-700 leading-8 text-lg">
              We are a team of experienced entrepreneurs, data scientists, and AI specialists passionate about helping others succeed. With a diverse background in technology, business, and innovation, we bring a unique perspective to the world of startup validation.
            </p>
          </section>

          <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 shadow-xl text-white">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
              Contact Us
            </h2>
            <p className="text-blue-100 leading-8 text-lg">
              Have questions or want to learn more? Reach out to us at{" "}
              <a href="mailto:info@validly.com" className="text-white hover:underline font-semibold">
                info@validly.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
