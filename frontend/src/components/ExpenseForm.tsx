import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, Plus } from "lucide-react";

interface ExpenseFormProps {
  onSubmit: (expense: {
    description: string;
    amount: number;
    category: string;
    date: Date;
  }) => void;
}

export function ExpenseForm({ onSubmit }: ExpenseFormProps) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState<Date>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (description && amount && category && date) {
      onSubmit({
        description,
        amount: parseFloat(amount),
        category,
        date,
      });
      // Reset form
      setDescription("");
      setAmount("");
      setCategory("");
      setDate(undefined);
    }
  };

  return (
    <Card className="bg-gradient-card shadow-card border-0 transition-all duration-300 hover:shadow-lg">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold text-foreground flex items-center gap-2">
          <Plus className="h-5 w-5 text-primary" />
          Add New Expense
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Track your spending by adding expense details below
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="description" className="text-sm font-medium text-foreground">
                Description
              </Label>
              <Input
                id="description"
                type="text"
                placeholder="Coffee, Lunch, Gas..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="bg-background border-border focus:ring-primary focus:border-primary transition-colors"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="amount" className="text-sm font-medium text-foreground">
                Amount ($)
              </Label>
              <Input
                id="amount"
                type="number"
                step="0.01"
                placeholder="25.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="bg-background border-border focus:ring-primary focus:border-primary transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="category" className="text-sm font-medium text-foreground">
                Category
              </Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="bg-background border-border focus:ring-primary focus:border-primary">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent className="bg-popover border-border">
                  <SelectItem value="General">General</SelectItem>
                  <SelectItem value="Food">Food</SelectItem>
                  <SelectItem value="Transport">Transport</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="date" className="text-sm font-medium text-foreground">
                Date
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal bg-background border-border hover:bg-secondary",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-popover border-border" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-primary hover:scale-[1.02] shadow-button transition-all duration-300"
            disabled={!description || !amount || !category || !date}
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Expense
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}