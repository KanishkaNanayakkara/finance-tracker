import { useState } from "react";
import { ExpenseForm } from "@/components/ExpenseForm";
import { ChartPlaceholder } from "@/components/ChartPlaceholder";
import { BudgetTipsCard } from "@/components/BudgetTipsCard";
import { SummaryCards } from "@/components/SummaryCards";
import { PiggyBank } from "lucide-react";

interface Expense {
  id: string;
  description: string;
  amount: number;
  category: string;
  date: Date;
}

const Index = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const monthlyBudget = 2000; // Default budget for demo

  const handleAddExpense = (expenseData: Omit<Expense, "id">) => {
    const newExpense: Expense = {
      ...expenseData,
      id: Date.now().toString(),
    };
    setExpenses(prev => [...prev, newExpense]);
  };

  const totalSpent = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="min-h-screen bg-gradient-background">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-button">
              <PiggyBank className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Personal Finance Tracker</h1>
              <p className="text-muted-foreground text-sm">Manage your expenses and stay on budget</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Summary Cards */}
        <SummaryCards 
          totalSpent={totalSpent}
          monthlyBudget={monthlyBudget}
          expenseCount={expenses.length}
        />

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Expense Form */}
            <ExpenseForm onSubmit={handleAddExpense} />
            
            {/* AI Budget Tips */}
            <BudgetTipsCard />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Chart Placeholder */}
            <ChartPlaceholder />

            {/* Recent Expenses List */}
            {expenses.length > 0 && (
              <div className="bg-gradient-card shadow-card border-0 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Recent Expenses</h3>
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {expenses.slice(-5).reverse().map((expense) => (
                    <div 
                      key={expense.id} 
                      className="flex justify-between items-center p-3 bg-secondary/30 rounded-lg border border-border/50 transition-colors hover:bg-secondary/50"
                    >
                      <div>
                        <p className="font-medium text-foreground">{expense.description}</p>
                        <p className="text-xs text-muted-foreground">
                          {expense.category} • {expense.date.toLocaleDateString()}
                        </p>
                      </div>
                      <span className="font-semibold text-destructive">
                        -${expense.amount.toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;