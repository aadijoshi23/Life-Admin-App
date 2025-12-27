import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LifeTask, TaskCategory } from "@/types/task";
import { categories, sampleTasks } from "@/data/sampleTasks";
import { useAuth } from "@/hooks/useAuth";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { StatsOverview } from "./StatsOverview";
import { CategoryCard } from "./CategoryCard";
import { TaskCard } from "./TaskCard";
import { AddTaskDialog } from "./AddTaskDialog";
import { ChevronLeft, Filter, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

export const Dashboard = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);
  const { toast } = useToast();
  const [tasks, setTasks] = useState<LifeTask[]>(sampleTasks);
  const [selectedCategory, setSelectedCategory] = useState<TaskCategory | null>(null);
  const [filter, setFilter] = useState<"all" | "overdue" | "due-soon">("all");
  const [addTaskOpen, setAddTaskOpen] = useState(false);

  const handleAddTask = (task: LifeTask) => {
    setTasks(prev => [...prev, task]);
    toast({
      title: "Task added",
      description: `"${task.title}" has been added to ${task.category}.`,
    });
  };

  const handleToggleComplete = (id: string) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks.filter(task => {
    if (selectedCategory && task.category !== selectedCategory) return false;
    if (filter === "overdue") return task.status === "overdue" && !task.completed;
    if (filter === "due-soon") return task.status === "due-soon" && !task.completed;
    return true;
  });

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (a.completed !== b.completed) return a.completed ? 1 : -1;
    const statusOrder = { overdue: 0, "due-soon": 1, upcoming: 2, completed: 3 };
    return statusOrder[a.status] - statusOrder[b.status];
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header onAddTask={() => setAddTaskOpen(true)} />
      <AddTaskDialog
        open={addTaskOpen}
        onOpenChange={setAddTaskOpen}
        onAddTask={handleAddTask}
      />

      <main className="container mx-auto px-4 pb-12">
        <HeroSection />

        {/* Stats */}
        <section className="mb-8">
          <StatsOverview tasks={tasks} />
        </section>

        {!selectedCategory ? (
          // Category Grid
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {categories.map((category, index) => (
                <div
                  key={category.id}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CategoryCard
                    category={category}
                    tasks={tasks.filter(t => t.category === category.id)}
                    onClick={() => setSelectedCategory(category.id)}
                  />
                </div>
              ))}
            </div>
          </section>
        ) : (
          // Task List View
          <section className="animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedCategory(null)}
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <h2 className="text-xl font-semibold text-foreground capitalize">
                  {selectedCategory} Tasks
                </h2>
              </div>

              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                {["all", "overdue", "due-soon"].map((f) => (
                  <Button
                    key={f}
                    variant={filter === f ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setFilter(f as typeof filter)}
                    className={cn(
                      "capitalize text-xs",
                      filter === f && f === "overdue" && "bg-destructive hover:bg-destructive/90",
                      filter === f && f === "due-soon" && "bg-warning hover:bg-warning/90"
                    )}
                  >
                    {f.replace("-", " ")}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              {sortedTasks.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  <p>No tasks found with this filter.</p>
                </div>
              ) : (
                sortedTasks.map((task, index) => (
                  <div
                    key={task.id}
                    className="animate-slide-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <TaskCard task={task} onToggleComplete={handleToggleComplete} />
                  </div>
                ))
              )}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};
