
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Trash, ChevronDown } from "lucide-react";

type SampleIdea = {
  id: string;
  idea: string;
  ai_response: {
    overview: string;
    revenue_model: string;
    challenges: string;
    market_analysis: string;
    recommendations: string;
  };
  created_at: string;
};

const SAMPLE_IDEAS: SampleIdea[] = [
  {
    id: "1",
    idea: "AI-powered Language Learning Platform",
    ai_response: {
      overview: "This innovative language learning platform combines spaced repetition with AI-driven lesson plans to tailor content per user's learning style and pace.",
      revenue_model: "Subscription-based model with tiered pricing: Basic ($9.99/month), Premium ($19.99/month), and Enterprise ($49.99/month for teams).",
      challenges: "Market competition is fierce with established players like Duolingo and Babbel. User retention and engagement will be critical success factors.",
      market_analysis: "The global language learning market is valued at $10.5 billion and growing at 18.7% CAGR. Mobile learning segment represents 60% of the market.",
      recommendations: "Focus on a specific niche initially (e.g., business language learning) and leverage AI for personalized learning paths to differentiate from competitors."
    },
    created_at: "2025-06-12T10:30:00Z",
  },
  {
    id: "2",
    idea: "Eco-Friendly Delivery Service",
    ai_response: {
      overview: "An app-based delivery service that matches customers with green last-mile delivery options using electric vehicles, bicycles, and sustainable packaging.",
      revenue_model: "Commission-based model taking 15-20% per delivery, plus premium subscription for priority green delivery at $12.99/month.",
      challenges: "Logistics partnerships required with local delivery providers. High initial investment for fleet management and technology infrastructure.",
      market_analysis: "Last-mile delivery market is $40 billion globally. 73% of consumers willing to pay more for sustainable delivery options.",
      recommendations: "Start with urban areas with high environmental consciousness. Partner with existing delivery services rather than building own fleet initially."
    },
    created_at: "2025-04-23T16:20:00Z",
  },
  {
    id: "3",
    idea: "Health & Wellness Gamification App",
    ai_response: {
      overview: "Gamifies daily healthy habits through challenges, achievements, and social competition, incentivizing users with real prizes and leaderboards.",
      revenue_model: "Freemium model with basic features free, premium at $7.99/month, plus in-app purchases for premium challenges and exclusive rewards.",
      challenges: "User retention is notoriously difficult in health apps. Providing genuine long-term value beyond initial engagement spike is crucial.",
      market_analysis: "Health and fitness app market worth $4.4 billion, growing 14.7% annually. Gamification in health shows 90% higher engagement rates.",
      recommendations: "Focus on habit formation psychology, partner with health insurance companies for user acquisition, and integrate with wearables for seamless tracking."
    },
    created_at: "2025-03-14T09:15:00Z",
  },
  {
    id: "4",
    idea: "Remote Team-Building Experiences",
    ai_response: {
      overview: "Offers virtual games, workshops, and live interactive events designed to enhance remote employee engagement and team cohesion.",
      revenue_model: "B2B SaaS with tiered pricing: Starter ($29/month for up to 25 employees), Professional ($99/month for up to 100), Enterprise (custom pricing).",
      challenges: "Differentiation in crowded market and seamless onboarding for non-tech-savvy team leaders. Proving ROI on team building investments.",
      market_analysis: "Corporate team building market is $4.75 billion. 87% of remote workers report feeling disconnected from their teams.",
      recommendations: "Develop proprietary engagement metrics dashboard, offer free trial periods, and create industry-specific team building modules."
    },
    created_at: "2025-02-10T11:00:00Z",
  },
  {
    id: "5",
    idea: "On-demand Home Chef Platform",
    ai_response: {
      overview: "Connects users with vetted, local home chefs for private dining experiences, meal prep services, and cooking lessons in their own homes.",
      revenue_model: "Marketplace model with 18% commission from chefs, plus monthly subscription for priority booking and exclusive chef access at $24.99/month.",
      challenges: "Trust and food safety concerns, insurance and liability issues, and ensuring consistent quality across different chefs and locations.",
      market_analysis: "Personal chef services market growing 5.8% annually, valued at $1.2 billion. 45% of millennials prefer dining experiences over material goods.",
      recommendations: "Implement rigorous chef vetting process, partner with culinary schools for talent pipeline, and offer comprehensive insurance coverage for peace of mind."
    },
    created_at: "2025-01-21T19:40:00Z",
  },
];

export default function SampleStartupIdeas() {
  const [ideas, setIdeas] = useState<SampleIdea[]>(SAMPLE_IDEAS);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDelete = (id: string) => {
    setIdeas((prev) => prev.filter((idea) => idea.id !== id));
  };

  const toggleDropdown = (id: string) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  if (ideas.length === 0) {
    return (
      <div className="text-slate-500 mb-6 text-center">
        No sample startup ideas to display.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {ideas.map((idea) => (
        <Card key={idea.id} className="relative">
          <CardHeader className="flex flex-row items-start gap-2">
            <div className="flex-1">
              <CardTitle className="text-base sm:text-lg mb-1">
                {idea.idea}
              </CardTitle>
              <div className="text-xs text-slate-400">
                {new Date(idea.created_at).toLocaleString()}
              </div>
            </div>
            <div className="flex flex-col gap-2 items-end">
              <Button
                size="icon"
                variant="ghost"
                aria-label="Show AI Response"
                onClick={() => toggleDropdown(idea.id)}
                className={`transition-transform ${openDropdown === idea.id ? "rotate-180" : ""}`}
              >
                <ChevronDown />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                aria-label="Delete Idea"
                onClick={() => handleDelete(idea.id)}
              >
                <Trash className="text-destructive" />
              </Button>
            </div>
          </CardHeader>
          {openDropdown === idea.id && (
            <CardContent>
              <div>
                <span className="block font-semibold text-slate-800 mb-3">
                  AI Analysis
                </span>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="overview">
                    <AccordionTrigger className="text-sm font-medium">Overview</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-slate-700">{idea.ai_response.overview}</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="revenue">
                    <AccordionTrigger className="text-sm font-medium">Revenue Model</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-slate-700">{idea.ai_response.revenue_model}</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="challenges">
                    <AccordionTrigger className="text-sm font-medium">Challenges</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-slate-700">{idea.ai_response.challenges}</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="market">
                    <AccordionTrigger className="text-sm font-medium">Market Analysis</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-slate-700">{idea.ai_response.market_analysis}</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="recommendations">
                    <AccordionTrigger className="text-sm font-medium">Recommendations</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-slate-700">{idea.ai_response.recommendations}</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </CardContent>
          )}
        </Card>
      ))}
    </div>
  );
}
