import { Component, computed, inject } from '@angular/core';
import { WarehouseComponent } from '../features/warehouse/warehouse.component';
import { QuickActionsComponent } from '../features/quick-actions/quick-actions/quick-actions.component';
import { TaskListComponent } from '../features/tasks/task-list/task-list.component';
import { DashboardComponent } from '../features/dashboard/dashboard.component';
import { WarehouseService } from '../core/services/warehouse.service';
import { TaskService } from '../core/services/task.service';
import { Box } from '../core/models/box.model';
import { Task } from '../core/models/task.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    WarehouseComponent,
    QuickActionsComponent,
    TaskListComponent,
    DashboardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private warehouseService = inject(WarehouseService);
  private taskService = inject(TaskService);

  boxes$ = this.warehouseService.boxes$;
  tasks$ = this.taskService.tasks$;

  constructor() {
    this.seedData();
  }

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

    this.warehouseService.addBox(newBox);
  }

  resetWarehouse(): void {
    this.warehouseService.reset();
  }

  private seedData(): void {
    const initialBoxes: Box[] = [
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

    const initialTasks: Task[] = [
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

    this.warehouseService.setBoxes(initialBoxes);
    this.taskService.setTasks(initialTasks);
  }
}
