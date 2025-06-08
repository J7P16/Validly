import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Privacy = () => {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
        <p className="text-gray-700 mb-4">
          Your privacy is important to us. This Privacy Policy explains how Validly ("we," "us," or "our") collects, uses, and protects your information when you use our website and services.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Information We Collect</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li><strong>Personal Information:</strong> We may collect your name, email address, and other contact information when you register or use our services.</li>
          <li><strong>Usage Data:</strong> We collect information about how you use our website, including your IP address, browser type, and pages visited.</li>
          <li><strong>Cookies:</strong> We use cookies to enhance your experience and gather data about website traffic.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. How We Use Your Information</h2>
        <p className="text-gray-700 mb-4">
          We use your information to:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Provide and improve our services.</li>
          <li>Communicate with you about updates and offers.</li>
          <li>Analyze website usage and trends.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Data Security</h2>
        <p className="text-gray-700 mb-4">
          We take reasonable measures to protect your information from unauthorized access, use, or disclosure.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Third-Party Services</h2>
        <p className="text-gray-700 mb-4">
          We may use third-party services to process your data. These services have their own privacy policies, and we are not responsible for their practices.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Your Rights</h2>
        <p className="text-gray-700 mb-4">
          You have the right to access, correct, or delete your personal information. Contact us to exercise these rights.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Changes to This Policy</h2>
        <p className="text-gray-700 mb-4">
          We may update this Privacy Policy from time to time. We will notify you of any significant changes.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@validly.com" className="text-blue-600 hover:underline">privacy@validly.com</a>.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
