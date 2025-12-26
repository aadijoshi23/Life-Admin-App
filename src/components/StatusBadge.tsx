import { cn } from "@/lib/utils";
import { TaskStatus } from "@/types/task";

interface StatusBadgeProps {
  status: TaskStatus;
  className?: string;
}

const statusConfig: Record<TaskStatus, { label: string; className: string }> = {
  overdue: {
    label: "Overdue",
    className: "bg-destructive/10 text-destructive border-destructive/20"
  },
  "due-soon": {
    label: "Due Soon",
    className: "bg-warning/10 text-warning border-warning/20"
  },
  upcoming: {
    label: "Upcoming",
    className: "bg-primary/10 text-primary border-primary/20"
  },
  completed: {
    label: "Done",
    className: "bg-success/10 text-success border-success/20"
  }
};

export const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  const config = statusConfig[status];

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
        config.className,
        className
      )}
    >
      {config.label}
    </span>
  );
};
