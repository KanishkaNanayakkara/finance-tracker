import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingDown, TrendingUp, Wallet, Calendar } from "lucide-react";

interface SummaryCardsProps {
  totalSpent: number;
  monthlyBudget: number;
  expenseCount: number;
}

export function SummaryCards({ totalSpent, monthlyBudget, expenseCount }: SummaryCardsProps) {
  const remaining = monthlyBudget - totalSpent;
  const percentageSpent = monthlyBudget > 0 ? (totalSpent / monthlyBudget) * 100 : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Total Spent */}
      <Card className="bg-gradient-card shadow-card border-0 transition-all duration-300 hover:shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Total Spent
          </CardTitle>
          <TrendingUp className="h-4 w-4 text-destructive" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-foreground">${totalSpent.toFixed(2)}</div>
          <p className="text-xs text-muted-foreground">
            {percentageSpent.toFixed(1)}% of budget used
          </p>
        </CardContent>
      </Card>

      {/* Remaining Budget */}
      <Card className="bg-gradient-card shadow-card border-0 transition-all duration-300 hover:shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Remaining
          </CardTitle>
          <TrendingDown className="h-4 w-4 text-success" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-foreground">${remaining.toFixed(2)}</div>
          <p className="text-xs text-muted-foreground">
            Left in monthly budget
          </p>
        </CardContent>
      </Card>

      {/* Monthly Budget */}
      <Card className="bg-gradient-card shadow-card border-0 transition-all duration-300 hover:shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Monthly Budget
          </CardTitle>
          <Wallet className="h-4 w-4 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-foreground">${monthlyBudget.toFixed(2)}</div>
          <p className="text-xs text-muted-foreground">
            Your spending limit
          </p>
        </CardContent>
      </Card>

      {/* Expense Count */}
      <Card className="bg-gradient-card shadow-card border-0 transition-all duration-300 hover:shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Expenses
          </CardTitle>
          <Calendar className="h-4 w-4 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-foreground">{expenseCount}</div>
          <p className="text-xs text-muted-foreground">
            Tracked this month
          </p>
        </CardContent>
      </Card>
    </div>
  );
}