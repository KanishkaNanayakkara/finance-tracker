import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, RefreshCw, Sparkles } from "lucide-react";
import { useState } from "react";

const budgetTips = [
  "Try cooking at home to save $20 per week on dining out.",
  "Use public transport or carpool to reduce transport costs by 30%.",
  "Set up automatic savings to build your emergency fund gradually.",
  "Review your subscriptions monthly - cancel unused services to save $15-50.",
  "Buy generic brands for groceries to cut food costs by 15-20%.",
  "Use cash envelopes for discretionary spending to stay within budget.",
  "Plan meals weekly to reduce food waste and save $30 per month.",
  "Compare prices before major purchases to find the best deals.",
];

export function BudgetTipsCard() {
  const [currentTip, setCurrentTip] = useState(0);

  const getNewTip = () => {
    const nextTip = (currentTip + 1) % budgetTips.length;
    setCurrentTip(nextTip);
  };

  return (
    <Card className="bg-gradient-card shadow-card border-0 transition-all duration-300 hover:shadow-lg">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold text-foreground flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          AI Budget Tips
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Smart suggestions to help you save money
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="bg-secondary/20 rounded-lg p-4 mb-4 border border-border/50">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <Lightbulb className="h-4 w-4 text-primary" />
            </div>
            <p className="text-foreground text-sm leading-relaxed">
              {budgetTips[currentTip]}
            </p>
          </div>
        </div>
        
        <Button 
          onClick={getNewTip}
          variant="outline"
          className="w-full bg-background border-border hover:bg-secondary transition-all duration-300"
        >
          <RefreshCw className="mr-2 h-4 w-4" />
          Get New Tip
        </Button>
      </CardContent>
    </Card>
  );
}