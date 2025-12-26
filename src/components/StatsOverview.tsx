import { LifeTask } from "@/types/task";
import { AlertTriangle, Clock, CheckCircle2, ListTodo } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsOverviewProps {
  tasks: LifeTask[];
}

export const StatsOverview = ({ tasks }: StatsOverviewProps) => {
  const stats = {
    overdue: tasks.filter(t => t.status === "overdue" && !t.completed).length,
    dueSoon: tasks.filter(t => t.status === "due-soon" && !t.completed).length,
    completed: tasks.filter(t => t.completed).length,
    total: tasks.length
  };

  const statItems = [
    {
      label: "Overdue",
      value: stats.overdue,
      icon: AlertTriangle,
      color: "text-destructive",
      bg: "bg-destructive/10"
    },
    {
      label: "Due Soon",
      value: stats.dueSoon,
      icon: Clock,
      color: "text-warning",
      bg: "bg-warning/10"
    },
    {
      label: "Completed",
      value: stats.completed,
      icon: CheckCircle2,
      color: "text-success",
      bg: "bg-success/10"
    },
    {
      label: "Total Tasks",
      value: stats.total,
      icon: ListTodo,
      color: "text-primary",
      bg: "bg-primary/10"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {statItems.map((stat, index) => (
        <div
          key={stat.label}
          className="p-4 rounded-xl bg-card shadow-card animate-scale-in"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-center gap-3">
            <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", stat.bg)}>
              <stat.icon className={cn("w-5 h-5", stat.color)} />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
