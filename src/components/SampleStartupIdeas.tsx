
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Trash, ChevronDown } from "lucide-react";

type SampleIdea = {
  id: string;
  idea: string;
  ai_response: string;
  created_at: string;
};

const SAMPLE_IDEAS: SampleIdea[] = [
  {
    id: "1",
    idea: "AI-powered Language Learning Platform",
    ai_response:
      "This idea combines spaced repetition with AI-driven lesson plans to tailor content per user.\nRevenue Model: Subscription. Challenges: Market competition is fierce.",
    created_at: "2025-06-12T10:30:00Z",
  },
  {
    id: "2",
    idea: "Eco-Friendly Delivery Service",
    ai_response:
      "An app to match customers with green last-mile delivery options using electric vehicles.\nRevenue Model: Commission per delivery. Challenges: Logistics partnerships required.",
    created_at: "2025-04-23T16:20:00Z",
  },
  {
    id: "3",
    idea: "Health & Wellness Gamification App",
    ai_response:
      "Gamifies daily healthy habits, incentivizing with prizes & leaderboards.\nRevenue Model: Freemium with in-app purchases. Challenges: Retention and genuine value.",
    created_at: "2025-03-14T09:15:00Z",
  },
  {
    id: "4",
    idea: "Remote Team-Building Experiences",
    ai_response:
      "Offers virtual games and live events to enhance remote employee engagement.\nRevenue Model: B2B SaaS tiered pricing. Challenges: Differentiation & onboarding.",
    created_at: "2025-02-10T11:00:00Z",
  },
  {
    id: "5",
    idea: "On-demand Home Chef Platform",
    ai_response:
      "Connects users with vetted, local home chefs for private dining experiences.\nRevenue Model: Market fee + chef subscription. Challenges: Trust & food safety.",
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {ideas.map((idea) => (
        <Card key={idea.id} className="relative">
          <CardHeader className="flex flex-row items-start gap-2">
            <div className="flex-1">
              <CardTitle className="line-clamp-2 text-base sm:text-lg mb-1">
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
                <span className="block font-semibold text-slate-800 mb-1">
                  AI Response
                </span>
                <pre className="text-xs sm:text-sm whitespace-pre-wrap bg-slate-100 rounded-md p-2 text-slate-700 max-h-48 overflow-y-auto">
                  {idea.ai_response}
                </pre>
              </div>
            </CardContent>
          )}
        </Card>
      ))}
    </div>
  );
}
