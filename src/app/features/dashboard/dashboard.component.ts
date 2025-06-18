import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Box } from '../../core/models/box.model';
import { Task } from '../../core/models/task.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  @Input() boxes: Box[] = [];
  @Input() tasks: Task[] = [];

  get totalBoxes(): number {
    return this.boxes.length;
  }

  get boxesByPriority(): Record<string, number> {
    return this.boxes.reduce((acc, box) => {
      acc[box.priority] = (acc[box.priority] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  }

  get tasksByStatus(): Record<string, number> {
    return this.tasks.reduce((acc, task) => {
      acc[task.status] = (acc[task.status] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  }
}
