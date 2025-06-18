import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../../core/models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksSubject = new BehaviorSubject<Task[]>([]);
  tasks$ = this.tasksSubject.asObservable();

  get tasks(): Task[] {
    return this.tasksSubject.getValue();
  }

  addTask(task: Task): void {
    this.tasksSubject.next([...this.tasks, task]);
  }

  updateTaskStatus(taskId: string, newStatus: Task['status']): void {
    const updated = this.tasks.map(task =>
      task.id === taskId ? { ...task, status: newStatus } : task
    );
    this.tasksSubject.next(updated);
  }

  reset(): void {
    this.tasksSubject.next([]);
  }

  setTasks(tasks: Task[]): void {
    this.tasksSubject.next([...tasks]);
  }
}
