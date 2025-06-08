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
            src="/lovable-uploads/d98a6e52-f3fd-4318-ab9b-2e588da0e565.png" 
            alt="Validly Logo" 
            className="h-8 w-8"
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
      <div className="max-w-4xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Validly</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-7">
            At Validly, we're dedicated to empowering entrepreneurs and innovators by providing them with the tools they need to validate their startup ideas quickly and effectively. We believe that every great idea deserves a chance to succeed, and we're here to help you make that happen.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Do</h2>
          <p className="text-gray-700 leading-7 mb-4">
            Our AI-powered platform analyzes your startup idea, providing you with valuable insights into market demand, competitor analysis, target audience, and potential revenue models. We help you prioritize your MVP features and create a solid foundation for your business.
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-7">
            <li><strong>Market Analysis:</strong> Understand the potential of your market.</li>
            <li><strong>Competitor Insights:</strong> Identify and analyze your top competitors.</li>
            <li><strong>Target Audience:</strong> Define and understand your ideal customers.</li>
            <li><strong>MVP Prioritization:</strong> Focus on the essential features for your initial product.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Team</h2>
          <p className="text-gray-700 leading-7">
            We are a team of experienced entrepreneurs, data scientists, and AI specialists passionate about helping others succeed. With a diverse background in technology, business, and innovation, we bring a unique perspective to the world of startup validation.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-700 leading-7">
            Have questions or want to learn more? Reach out to us at <a href="mailto:info@validly.com" className="text-blue-600 hover:underline">info@validly.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
