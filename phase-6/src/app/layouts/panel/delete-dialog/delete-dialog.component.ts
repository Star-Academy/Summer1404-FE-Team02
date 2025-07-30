import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete-dialog',
  standalone: true,
  imports: [],
  templateUrl: './delete-dialog.component.html',
  styleUrls: [
    '../shared/shared.component.css',
    './delete-dialog.component.css',
  ],
})
export class DeleteDialogComponent {
  @Input({ required: true }) name!: string;
  @Output() submit = new EventEmitter<boolean>();
  @Output() successDelete = new EventEmitter<'delete'>();

  onSubmit(value: boolean) {
    this.submit.emit(value);
    if (value) {
      this.successDelete.emit('delete');
    }
  }
}
