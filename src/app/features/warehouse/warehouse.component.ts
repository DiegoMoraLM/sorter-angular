import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Box } from '../../core/models/box.model';
import { BoxDetailsComponent } from '../../shared/modals/box-details/box-details.component';

@Component({
  selector: 'app-warehouse',
  standalone: true,
  imports: [CommonModule, BoxDetailsComponent],
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss']
})
export class WarehouseComponent {
  @Input() columns = 4;
  @Input() heights = 5;
  @Input() boxes: Box[] = [];

  selectedBox: Box | null = null;

  getBoxAt(column: number, height: number): Box | null {
    return this.boxes.find(
      box => box.position?.column === column && box.position?.height === height
    ) || null;
  }

  selectBox(box: Box): void {
    this.selectedBox = box;
  }

  closeBoxDetails(): void {
    this.selectedBox = null;
  }
}
