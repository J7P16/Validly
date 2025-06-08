
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Footer } from "@/components/Footer";

const Privacy = () => {
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
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
            <p className="text-slate-600 mb-8">Last updated: January 1, 2025</p>

            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">1. Information We Collect</h2>
              <p className="text-slate-600 mb-4">
                We collect information you provide directly to us, such as when you create an account, 
                use our services, or contact us for support. This may include:
              </p>
              <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
                <li>Name and email address</li>
                <li>Business ideas and descriptions you submit for validation</li>
                <li>Payment information (processed securely through third-party providers)</li>
                <li>Communication preferences and feedback</li>
              </ul>

              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">2. How We Use Your Information</h2>
              <p className="text-slate-600 mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
                <li>Provide and improve our validation services</li>
                <li>Process your requests and provide customer support</li>
                <li>Send you important updates about our services</li>
                <li>Analyze usage patterns to enhance user experience</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">3. Information Sharing</h2>
              <p className="text-slate-600 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties, 
                except in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
                <li>With your explicit consent</li>
                <li>To comply with legal requirements or protect our rights</li>
                <li>With trusted service providers who assist in operating our platform</li>
                <li>In connection with a business transfer or acquisition</li>
              </ul>

              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">4. Data Security</h2>
              <p className="text-slate-600 mb-6">
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. This includes 
                encryption, secure servers, and regular security assessments.
              </p>

              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">5. Your Rights</h2>
              <p className="text-slate-600 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
                <li>Access and review your personal information</li>
                <li>Correct inaccurate or incomplete data</li>
                <li>Delete your account and associated data</li>
                <li>Object to or restrict certain processing activities</li>
                <li>Data portability for information you've provided</li>
              </ul>

              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">6. Cookies and Tracking</h2>
              <p className="text-slate-600 mb-6">
                We use cookies and similar technologies to enhance your experience, analyze site usage, 
                and assist in our marketing efforts. You can control cookie preferences through your 
                browser settings.
              </p>

              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">7. Data Retention</h2>
              <p className="text-slate-600 mb-6">
                We retain your personal information only as long as necessary to provide our services 
                and fulfill the purposes outlined in this policy, unless a longer retention period is 
                required by law.
              </p>

              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">8. Children's Privacy</h2>
              <p className="text-slate-600 mb-6">
                Our services are not intended for individuals under the age of 18. We do not knowingly 
                collect personal information from children under 18.
              </p>

              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">9. International Data Transfers</h2>
              <p className="text-slate-600 mb-6">
                Your information may be transferred to and processed in countries other than your country 
                of residence. We ensure appropriate safeguards are in place for such transfers.
              </p>

              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">10. Changes to This Policy</h2>
              <p className="text-slate-600 mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any material 
                changes by posting the new policy on this page and updating the "Last updated" date.
              </p>

              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Contact Us</h2>
              <p className="text-slate-600 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-slate-700">
                  Email: privacy@validly.com<br />
                  Address: 123 Innovation Drive, Tech City, TC 12345
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

export default Privacy;
