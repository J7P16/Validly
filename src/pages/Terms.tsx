
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Footer } from "@/components/Footer";

const Terms = () => {
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
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Terms of Service</h1>
            <p className="text-slate-600 mb-8">Last updated: January 1, 2025</p>

            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">1. Agreement to Terms</h2>
              <p className="text-slate-600 mb-6">
                By accessing and using Validly's services, you agree to be bound by these Terms of Service 
                and all applicable laws and regulations. If you do not agree with any of these terms, 
                you are prohibited from using our services.
              </p>

              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">2. Description of Service</h2>
              <p className="text-slate-600 mb-6">
                Validly provides AI-powered startup idea validation services, including market analysis, 
                competitor research, and business insights. Our platform is designed to help entrepreneurs 
                make data-driven decisions about their business ideas.
              </p>

              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">3. User Accounts</h2>
              <p className="text-slate-600 mb-4">To use certain features of our service, you must:</p>
              <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
                <li>Create an account with accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Be at least 18 years old or have parental consent</li>
                <li>Use the service only for lawful purposes</li>
              </ul>

              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">4. Acceptable Use</h2>
              <p className="text-slate-600 mb-4">You agree not to:</p>
              <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
                <li>Submit illegal, harmful, or offensive content</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Interfere with or disrupt our services</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use our service to compete with us or create similar services</li>
                <li>Share your account credentials with others</li>
              </ul>

              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">5. Intellectual Property</h2>
              <p className="text-slate-600 mb-6">
                The Validly platform, including all content, features, and functionality, is owned by 
                Validly and is protected by international copyright, trademark, and other intellectual 
                property laws. You retain ownership of the business ideas you submit, but grant us 
                a license to use them solely for providing our validation services.
              </p>

              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">6. Payment Terms</h2>
              <p className="text-slate-600 mb-4">For paid services:</p>
              <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
                <li>Payment is due in advance for subscription services</li>
                <li>All fees are non-refundable unless otherwise stated</li>
                <li>We may change pricing with 30 days' notice</li>
                <li>Failure to pay may result in service suspension</li>
              </ul>

              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">7. Privacy and Data Protection</h2>
              <p className="text-slate-600 mb-6">
                Your privacy is important to us. Our Privacy Policy explains how we collect, use, and 
                protect your information when you use our services. By using Validly, you consent to 
                the collection and use of information in accordance with our Privacy Policy.
              </p>

              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">8. Disclaimers</h2>
              <p className="text-slate-600 mb-6">
                Our validation services are provided for informational purposes only and should not be 
                considered as professional business advice. We do not guarantee the accuracy, completeness, 
                or reliability of our analyses. Business decisions should be made based on your own 
                judgment and additional research.
              </p>

              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">9. Limitation of Liability</h2>
              <p className="text-slate-600 mb-6">
                To the maximum extent permitted by law, Validly shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages, or any loss of profits or 
                revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, 
                or other intangible losses.
              </p>

              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">10. Indemnification</h2>
              <p className="text-slate-600 mb-6">
                You agree to defend, indemnify, and hold harmless Validly and its affiliates from and 
                against any claims, damages, obligations, losses, liabilities, costs, and expenses 
                arising from your use of the service or violation of these terms.
              </p>

              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">11. Termination</h2>
              <p className="text-slate-600 mb-6">
                We may terminate or suspend your account and access to our services immediately, without 
                prior notice, for conduct that we believe violates these Terms of Service or is harmful 
                to other users, us, or third parties.
              </p>

              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">12. Governing Law</h2>
              <p className="text-slate-600 mb-6">
                These Terms shall be governed by and construed in accordance with the laws of the 
                jurisdiction in which Validly operates, without regard to its conflict of law provisions.
              </p>

              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">13. Changes to Terms</h2>
              <p className="text-slate-600 mb-6">
                We reserve the right to modify these Terms of Service at any time. We will notify users 
                of any material changes by posting the new terms on this page and updating the 
                "Last updated" date.
              </p>

              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Contact Information</h2>
              <p className="text-slate-600 mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-slate-700">
                  Email: johncapocyan@gmail.com<br />
                  Address: 714 Moss Hammock Way, Sugar Land, TX 77479
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
