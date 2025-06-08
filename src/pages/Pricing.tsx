
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Check, Star, Zap, Crown, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();
  const [billingCycle, setBillingCycle] = useState<"monthly" | "lifetime">("monthly");

  const plans = [
    {
      name: "Free",
      price: billingCycle === "monthly" ? "$0" : "$0",
      period: billingCycle === "monthly" ? "/month" : "",
      description: "Perfect for exploring your first startup idea",
      features: [
        "1 idea validation per day",
        "Basic market analysis",
        "Competitor overview",
        "MVP feature suggestions",
        "Community support"
      ],
      unavailable: [
        "PDF export",
        "Priority processing",
        "Advanced insights"
      ],
      cta: "Start for Free",
      ctaVariant: "outline" as const,
      popular: false,
      icon: Users
    },
    {
      name: "Pro",
      price: billingCycle === "monthly" ? "$9" : "$89",
      period: billingCycle === "monthly" ? "/month" : "/lifetime",
      description: "For serious entrepreneurs validating multiple ideas",
      features: [
        "Unlimited idea validations",
        "In-depth AI business reports",
        "Downloadable PDF exports",
        "Priority AI processing",
        "Advanced market insights",
        "Revenue model analysis",
        "Target audience deep-dive",
        "Email support"
      ],
      unavailable: [],
      cta: "Upgrade to Pro",
      ctaVariant: "default" as const,
      popular: true,
      icon: Zap
    },
    {
      name: "Founder",
      price: "$29",
      period: "/one-time",
      description: "Complete validation suite for launching founders",
      features: [
        "Everything in Pro",
        "3 custom pitch deck outlines",
        "2 personalized idea reviews via email",
        "Lifetime access to premium tools",
        "Priority customer support",
        "Early access to new features",
        "1-on-1 strategy consultation",
        "Founder community access"
      ],
      unavailable: [],
      cta: "Become a Founder",
      ctaVariant: "default" as const,
      popular: false,
      icon: Crown
    }
  ];

  const faqs = [
    {
      question: "How does the AI validation work?",
      answer: "Our AI analyzes your startup idea using GPT-4, comparing it against market data, competitor landscapes, and proven business models to provide comprehensive validation insights."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your Pro subscription at any time. Your access will continue until the end of your current billing period."
    },
    {
      question: "What's included in the PDF reports?",
      answer: "PDF reports include detailed market analysis, competitor breakdown, target audience insights, revenue model suggestions, MVP roadmap, and actionable next steps."
    },
    {
      question: "How accurate are the AI insights?",
      answer: "Our AI leverages extensive training data and real-time market information to provide insights with 85%+ accuracy, though we recommend using them as a starting point for your research."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 14-day money-back guarantee for all paid plans if you're not completely satisfied with the service."
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at the next billing cycle."
    }
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="px-4 py-8 max-w-6xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-8 text-slate-600 hover:text-slate-900"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Choose your validation{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              journey
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Start free and upgrade as you validate more ideas. All plans include our core AI validation engine.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-xl p-2 shadow-lg">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                billingCycle === "monthly"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("lifetime")}
              className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                billingCycle === "lifetime"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Lifetime
              <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                Save 90%
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name} 
              className={`relative border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm ${
                plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                  plan.name === 'Free' ? 'bg-slate-100' :
                  plan.name === 'Pro' ? 'bg-gradient-to-br from-blue-100 to-indigo-100' :
                  'bg-gradient-to-br from-amber-100 to-orange-100'
                }`}>
                  <plan.icon className={`w-8 h-8 ${
                    plan.name === 'Free' ? 'text-slate-600' :
                    plan.name === 'Pro' ? 'text-blue-600' :
                    'text-amber-600'
                  }`} />
                </div>
                
                <CardTitle className="text-2xl font-bold text-slate-900">
                  {plan.name}
                </CardTitle>
                <p className="text-slate-600 text-sm">{plan.description}</p>
                
                <div className="mt-4">
                  <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                  <span className="text-slate-600">{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                  {plan.unavailable.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 opacity-40">
                      <div className="w-5 h-5 mt-0.5 flex-shrink-0 border border-slate-300 rounded-full" />
                      <span className="text-slate-500 line-through">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full py-3 font-semibold rounded-xl transition-all duration-300 ${
                    plan.name === 'Free'
                      ? 'border-2 border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl'
                  }`}
                  onClick={() => plan.name === 'Free' ? navigate('/validate') : null}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center mb-20">
          <p className="text-slate-600 mb-4">🔒 Secured payments via Stripe • Cancel anytime • 14-day money-back guarantee</p>
          <div className="flex justify-center items-center gap-8 text-slate-500">
            <span>💳 All major cards accepted</span>
            <span>🌍 Available worldwide</span>
            <span>📧 Email support included</span>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-6 text-left hover:bg-slate-50/50 transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-slate-900">{faq.question}</h3>
                      <div className={`transform transition-transform ${
                        openFaq === index ? 'rotate-45' : ''
                      }`}>
                        <div className="w-6 h-6 flex items-center justify-center">
                          <div className="w-4 h-0.5 bg-slate-400"></div>
                          <div className="w-0.5 h-4 bg-slate-400 absolute"></div>
                        </div>
                      </div>
                    </div>
                  </button>
                  
                  {openFaq === index && (
                    <>
                      <Separator />
                      <div className="p-6 pt-4">
                        <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
