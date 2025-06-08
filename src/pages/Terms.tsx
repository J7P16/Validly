import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Terms = () => {
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
      <div className="max-w-3xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            By accessing or using Validly, you agree to be bound by these Terms of Service ("Terms"). 
            If you do not agree to these Terms, you may not access or use Validly.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Description of Service</h2>
          <p className="text-gray-700 leading-relaxed">
            Validly provides an AI-powered platform to validate startup ideas. 
            The service includes market analysis, competitor insights, and MVP recommendations.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. User Accounts</h2>
          <ul className="list-disc pl-5 text-gray-700 leading-relaxed">
            <li>You must be at least 18 years old to use Validly.</li>
            <li>You are responsible for maintaining the confidentiality of your account and password.</li>
            <li>You agree to accept responsibility for all activities that occur under your account.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Intellectual Property</h2>
          <p className="text-gray-700 leading-relaxed">
            The content, features, and functionality of Validly are owned by Validly and are protected by 
            international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Prohibited Conduct</h2>
          <p className="text-gray-700 leading-relaxed">
            You agree not to:
          </p>
          <ul className="list-disc pl-5 text-gray-700 leading-relaxed">
            <li>Use Validly for any illegal purpose.</li>
            <li>Attempt to interfere with the proper functioning of Validly.</li>
            <li>Use any robot, spider, or other automated means to access Validly.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Disclaimer of Warranties</h2>
          <p className="text-gray-700 leading-relaxed">
            Validly is provided "as is" without any warranties, express or implied.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Limitation of Liability</h2>
          <p className="text-gray-700 leading-relaxed">
            Validly shall not be liable for any indirect, incidental, special, consequential, or punitive damages.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Changes to Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            Validly reserves the right to modify these Terms at any time.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Governing Law</h2>
          <p className="text-gray-700 leading-relaxed">
            These Terms shall be governed by the laws of [Your Jurisdiction].
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Contact Information</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions about these Terms, please contact us at [Your Contact Email].
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
