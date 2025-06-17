import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quick-actions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quick-actions.component.html',
  styleUrls: ['./quick-actions.component.scss']
})
export class QuickActionsComponent {
  @Output() addBox = new EventEmitter<void>();
  @Output() resetWarehouse = new EventEmitter<void>();

  onAddBox() {
    this.addBox.emit();
  }

  onResetWarehouse() {
    this.resetWarehouse.emit();
  }
}
