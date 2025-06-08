
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CheckCircle, X, Sparkles } from "lucide-react";

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UpgradeModal = ({ isOpen, onClose }: UpgradeModalProps) => {
  const handleUpgrade = () => {
    // In a real app, this would integrate with Stripe
    console.log("Upgrading to premium...");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-600" />
              Unlock Full Analysis
            </DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="text-center">
            <p className="text-slate-600 mb-4">
              Want a deeper analysis? Get comprehensive market research and export your report for just $5.
            </p>
            <div className="text-3xl font-bold text-slate-900 mb-2">$5</div>
            <p className="text-sm text-slate-500">One-time payment</p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-slate-900">What's included:</h4>
            <div className="space-y-2">
              {[
                "Detailed competitor SWOT analysis",
                "Market size and growth projections",
                "Risk assessment and mitigation strategies", 
                "Financial projections template",
                "Investor pitch deck outline",
                "PDF export of full report"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-slate-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <Button variant="outline" onClick={onClose} className="flex-1">
              No Thanks
            </Button>
            <Button 
              onClick={handleUpgrade}
              className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
            >
              Unlock Now
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
