export interface Task {
  id: string;
  type: 'move' | 'pick' | 'store' | 'check' | 'reserve';
  boxId?: string;
  fromPosition?: { column: number; height: number };
  toPosition?: { column: number; height: number };
  priority: 'low' | 'medium' | 'high';
  assignedTo: string;
  status: 'pending' | 'in_progress' | 'completed';
  createdAt: Date;
  completedAt?: Date;
  notes?: string;
  estimatedTime?: number;
}