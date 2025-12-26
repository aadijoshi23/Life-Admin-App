export type TaskCategory = 'documents' | 'bills' | 'health' | 'exams';

export type TaskStatus = 'overdue' | 'due-soon' | 'upcoming' | 'completed';

export interface LifeTask {
  id: string;
  title: string;
  description?: string;
  category: TaskCategory;
  dueDate: Date;
  status: TaskStatus;
  completed: boolean;
  icon?: string;
}

export interface CategoryInfo {
  id: TaskCategory;
  label: string;
  icon: string;
  color: string;
  description: string;
}
