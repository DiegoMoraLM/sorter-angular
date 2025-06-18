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

  columnsPerPage = 4;
  currentPage = 0;

  get totalPages(): number {
    return Math.ceil(this.columns / this.columnsPerPage);
  }

  get visibleColumns(): number[] {
    const start = this.currentPage * this.columnsPerPage;
    return Array.from({ length: this.columnsPerPage }, (_, i) => start + i).filter(i => i < this.columns);
  }

  getBoxesInPosition(column: number, height: number): Box[] {
    return this.boxes.filter(
      b => b.position?.column === column && b.position?.height === height
    );
  }

  getBoxesAtRow(column: number, height: number): Box[] {
  return this.boxes.filter(
    box => box.position?.column === column && box.position?.height === height
  );
}

  get columnRangeLabel(): string {
  const start = this.currentPage * this.columnsPerPage + 1;
  const end = Math.min((this.currentPage + 1) * this.columnsPerPage, this.columns);
  return `Columnas ${start} a ${end} de ${this.columns}`;
}


  selectBox(box: Box): void {
    this.selectedBox = box;
  }

  closeBoxDetails(): void {
    this.selectedBox = null;
  }

  prevPage(): void {
    if (this.currentPage > 0) this.currentPage--;
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages - 1) this.currentPage++;
  }
}
