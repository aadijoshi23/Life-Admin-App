import { LifeTask, CategoryInfo } from '@/types/task';

export const categories: CategoryInfo[] = [
  {
    id: 'documents',
    label: 'Documents',
    icon: 'FileText',
    color: 'primary',
    description: 'Track ID cards, passports & renewals'
  },
  {
    id: 'bills',
    label: 'Bills',
    icon: 'Receipt',
    color: 'accent',
    description: 'Never miss a payment deadline'
  },
  {
    id: 'health',
    label: 'Health',
    icon: 'Heart',
    color: 'success',
    description: 'Checkups, vaccinations & medications'
  },
  {
    id: 'exams',
    label: 'Exams',
    icon: 'GraduationCap',
    color: 'warning',
    description: 'Forms, deadlines & results'
  }
];

const today = new Date();
const addDays = (days: number) => {
  const date = new Date(today);
  date.setDate(date.getDate() + days);
  return date;
};

export const sampleTasks: LifeTask[] = [
  // Documents
  {
    id: '1',
    title: 'Passport Renewal',
    description: 'Apply for renewal before expiry',
    category: 'documents',
    dueDate: addDays(15),
    status: 'due-soon',
    completed: false
  },
  {
    id: '2',
    title: 'PAN Card Update',
    description: 'Link Aadhaar with PAN',
    category: 'documents',
    dueDate: addDays(-2),
    status: 'overdue',
    completed: false
  },
  {
    id: '3',
    title: 'Driving License Renewal',
    description: 'Valid till next month',
    category: 'documents',
    dueDate: addDays(45),
    status: 'upcoming',
    completed: false
  },
  // Bills
  {
    id: '4',
    title: 'Electricity Bill',
    description: 'Monthly payment due',
    category: 'bills',
    dueDate: addDays(5),
    status: 'due-soon',
    completed: false
  },
  {
    id: '5',
    title: 'Internet Bill',
    description: 'Broadband subscription',
    category: 'bills',
    dueDate: addDays(12),
    status: 'upcoming',
    completed: false
  },
  {
    id: '6',
    title: 'Insurance Premium',
    description: 'LIC annual premium',
    category: 'bills',
    dueDate: addDays(-1),
    status: 'overdue',
    completed: false
  },
  // Health
  {
    id: '7',
    title: 'Annual Health Checkup',
    description: 'Book appointment at clinic',
    category: 'health',
    dueDate: addDays(30),
    status: 'upcoming',
    completed: false
  },
  {
    id: '8',
    title: 'Dental Cleaning',
    description: 'Routine dental visit',
    category: 'health',
    dueDate: addDays(7),
    status: 'due-soon',
    completed: false
  },
  {
    id: '9',
    title: 'Prescription Refill',
    description: 'Monthly medication',
    category: 'health',
    dueDate: addDays(3),
    status: 'due-soon',
    completed: false
  },
  // Exams
  {
    id: '10',
    title: 'GATE 2025 Registration',
    description: 'Complete online form',
    category: 'exams',
    dueDate: addDays(10),
    status: 'due-soon',
    completed: false
  },
  {
    id: '11',
    title: 'CAT Result Check',
    description: 'Results announcement',
    category: 'exams',
    dueDate: addDays(20),
    status: 'upcoming',
    completed: false
  },
  {
    id: '12',
    title: 'University Exam Form',
    description: 'Submit semester form',
    category: 'exams',
    dueDate: addDays(-3),
    status: 'overdue',
    completed: false
  }
];
