import { Component } from '@angular/core';
import { WarehouseComponent } from '../features/warehouse/warehouse.component';
import { QuickActionsComponent } from '../features/quick-actions/quick-actions/quick-actions.component';
import { Box } from '../core/models/box.model';
import { TaskListComponent } from '../features/tasks/task-list/task-list.component';
import { Task } from '../core/models/task.model';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WarehouseComponent, QuickActionsComponent,TaskListComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  mockBoxes: Box[] = [
    {
      id: '1',
      reference: 'BX-001',
      position: { column: 1, height: 2 },
      priority: 'high',
      status: 'available',
      operator: 'John',
      category: 'A',
      ot: 'OT123',
      entryDate: new Date()
    },
    {
      id: '2',
      reference: 'BX-002',
      position: { column: 0, height: 0 },
      priority: 'medium',
      status: 'available',
      operator: 'Alice',
      category: 'B',
      ot: 'OT456',
      entryDate: new Date()
    }
  ];

  addMockBox(): void {
    const newBox: Box = {
      id: crypto.randomUUID(),
      reference: `BX-${Math.floor(Math.random() * 1000)}`,
      position: {
        column: Math.floor(Math.random() * 4),
        height: Math.floor(Math.random() * 5)
      },
      priority: 'low',
      status: 'available',
      operator: 'System',
      category: 'Z',
      ot: 'OT999',
      entryDate: new Date()
    };

    this.mockBoxes = [...this.mockBoxes, newBox];
  }

  resetWarehouse(): void {
    this.mockBoxes = [];
  }

  mockTasks: Task[] = [
  {
    id: 'task-1',
    type: 'store',
    boxId: '1',
    fromPosition: undefined,
    toPosition: { column: 2, height: 3 },
    priority: 'medium',
    assignedTo: 'Ana',
    status: 'pending',
    createdAt: new Date()
  },
  {
    id: 'task-2',
    type: 'move',
    boxId: '2',
    fromPosition: { column: 0, height: 0 },
    toPosition: { column: 3, height: 1 },
    priority: 'high',
    assignedTo: 'Carlos',
    status: 'in_progress',
    createdAt: new Date(Date.now() - 3600000)
  }
];

}
