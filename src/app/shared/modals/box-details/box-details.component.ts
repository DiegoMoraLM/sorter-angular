import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Box } from '../../../core/models/box.model';

@Component({
  selector: 'app-box-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './box-details.component.html',
  styleUrls: ['./box-details.component.scss']
})
export class BoxDetailsComponent {
  @Input() box!: Box;
  @Output() close = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
  }
}
