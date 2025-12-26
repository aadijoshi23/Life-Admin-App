import { CategoryInfo, LifeTask } from "@/types/task";
import { FileText, Receipt, Heart, GraduationCap, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  category: CategoryInfo;
  tasks: LifeTask[];
  onClick?: () => void;
}

const icons = {
  FileText,
  Receipt,
  Heart,
  GraduationCap
};

const colorClasses = {
  primary: {
    bg: "bg-primary/10 group-hover:bg-primary/15",
    icon: "text-primary",
    border: "border-primary/20"
  },
  accent: {
    bg: "bg-accent/10 group-hover:bg-accent/15",
    icon: "text-accent",
    border: "border-accent/20"
  },
  success: {
    bg: "bg-success/10 group-hover:bg-success/15",
    icon: "text-success",
    border: "border-success/20"
  },
  warning: {
    bg: "bg-warning/10 group-hover:bg-warning/15",
    icon: "text-warning",
    border: "border-warning/20"
  }
};

export const CategoryCard = ({ category, tasks, onClick }: CategoryCardProps) => {
  const Icon = icons[category.icon as keyof typeof icons];
  const colors = colorClasses[category.color as keyof typeof colorClasses];
  
  const overdueCount = tasks.filter(t => t.status === "overdue" && !t.completed).length;
  const dueSoonCount = tasks.filter(t => t.status === "due-soon" && !t.completed).length;
  const totalPending = tasks.filter(t => !t.completed).length;

  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative w-full p-5 rounded-2xl bg-card shadow-card transition-all duration-300",
        "hover:shadow-card-hover hover:-translate-y-1 text-left",
        "border border-transparent hover:border-border"
      )}
    >
      {/* Icon */}
      <div
        className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center transition-colors",
          colors.bg
        )}
      >
        <Icon className={cn("w-6 h-6", colors.icon)} />
      </div>

      {/* Content */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-foreground">{category.label}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{category.description}</p>
      </div>

      {/* Stats */}
      <div className="mt-4 flex items-center gap-3">
        <span className="text-2xl font-bold text-foreground">{totalPending}</span>
        <span className="text-sm text-muted-foreground">pending</span>
        
        {overdueCount > 0 && (
          <span className="ml-auto px-2 py-0.5 rounded-full text-xs font-medium bg-destructive/10 text-destructive">
            {overdueCount} overdue
          </span>
        )}
        {overdueCount === 0 && dueSoonCount > 0 && (
          <span className="ml-auto px-2 py-0.5 rounded-full text-xs font-medium bg-warning/10 text-warning">
            {dueSoonCount} due soon
          </span>
        )}
      </div>

      {/* Arrow */}
      <ArrowRight className="absolute top-5 right-5 w-5 h-5 text-muted-foreground/50 group-hover:text-foreground group-hover:translate-x-0.5 transition-all" />
    </button>
  );
};
