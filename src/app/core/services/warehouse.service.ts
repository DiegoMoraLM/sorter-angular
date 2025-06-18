import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Box } from '../../core/models/box.model';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {
  private boxesSubject = new BehaviorSubject<Box[]>([]);
  boxes$ = this.boxesSubject.asObservable();

  get boxes(): Box[] {
    return this.boxesSubject.getValue();
  }

  addBox(box: Box): void {
    this.boxesSubject.next([...this.boxes, box]);
  }

  reset(): void {
    this.boxesSubject.next([]);
  }

  setBoxes(boxes: Box[]): void {
    this.boxesSubject.next([...boxes]);
  }
}
