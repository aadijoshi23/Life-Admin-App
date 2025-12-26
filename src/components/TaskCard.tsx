import { LifeTask } from "@/types/task";
import { StatusBadge } from "./StatusBadge";
import { format, formatDistanceToNow } from "date-fns";
import { FileText, Receipt, Heart, GraduationCap, Calendar, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface TaskCardProps {
  task: LifeTask;
  onToggleComplete?: (id: string) => void;
}

const categoryIcons = {
  documents: FileText,
  bills: Receipt,
  health: Heart,
  exams: GraduationCap
};

const categoryColors = {
  documents: "text-primary",
  bills: "text-accent",
  health: "text-success",
  exams: "text-warning"
};

export const TaskCard = ({ task, onToggleComplete }: TaskCardProps) => {
  const Icon = categoryIcons[task.category];
  const isOverdue = task.status === "overdue";
  const isDueSoon = task.status === "due-soon";

  return (
    <div
      className={cn(
        "group relative p-4 rounded-xl bg-card shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5",
        task.completed && "opacity-60"
      )}
    >
      <div className="flex items-start gap-3">
        {/* Category Icon */}
        <div
          className={cn(
            "flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center",
            task.category === "documents" && "bg-primary/10",
            task.category === "bills" && "bg-accent/10",
            task.category === "health" && "bg-success/10",
            task.category === "exams" && "bg-warning/10"
          )}
        >
          <Icon className={cn("w-5 h-5", categoryColors[task.category])} />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3
              className={cn(
                "font-medium text-foreground truncate",
                task.completed && "line-through text-muted-foreground"
              )}
            >
              {task.title}
            </h3>
            <StatusBadge status={task.completed ? "completed" : task.status} />
          </div>

          {task.description && (
            <p className="mt-1 text-sm text-muted-foreground line-clamp-1">
              {task.description}
            </p>
          )}

          <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="w-3.5 h-3.5" />
            <span className={cn(isOverdue && "text-destructive font-medium")}>
              {format(task.dueDate, "MMM d, yyyy")}
            </span>
            <span className="text-border">•</span>
            <span className={cn((isOverdue || isDueSoon) && "font-medium", isOverdue && "text-destructive")}>
              {formatDistanceToNow(task.dueDate, { addSuffix: true })}
            </span>
          </div>
        </div>

        {/* Complete Button */}
        <button
          onClick={() => onToggleComplete?.(task.id)}
          className={cn(
            "flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all",
            task.completed
              ? "bg-success border-success text-success-foreground"
              : "border-border hover:border-primary hover:bg-primary/5"
          )}
        >
          {task.completed && <Check className="w-3.5 h-3.5" />}
        </button>
      </div>
    </div>
  );
};
