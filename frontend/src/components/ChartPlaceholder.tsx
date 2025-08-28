import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp } from "lucide-react";

export function ChartPlaceholder() {
  return (
    <Card className="bg-gradient-card shadow-card border-0 transition-all duration-300 hover:shadow-lg">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold text-foreground flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-primary" />
          Spending by Category
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Visual breakdown of your expenses across different categories
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-64 bg-secondary/30 rounded-lg border-2 border-dashed border-border flex flex-col items-center justify-center text-center p-6">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <TrendingUp className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-lg font-medium text-foreground mb-2">Chart Coming Soon</h3>
          <p className="text-muted-foreground text-sm max-w-xs">
            Chart.js bar chart will be integrated here to show your spending patterns across categories
          </p>
          <div className="mt-4 flex gap-2">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <div className="w-3 h-3 bg-success rounded-full"></div>
            <div className="w-3 h-3 bg-destructive rounded-full"></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}