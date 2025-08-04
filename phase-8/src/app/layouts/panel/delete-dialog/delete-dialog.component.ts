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
  @Output() submitted = new EventEmitter<boolean>();
  @Output() successDelete = new EventEmitter<'delete'>();

  public onSubmit(value: boolean) {
    this.submitted.emit(value);
    if (value) {
      this.successDelete.emit('delete');
    }
  }
}
