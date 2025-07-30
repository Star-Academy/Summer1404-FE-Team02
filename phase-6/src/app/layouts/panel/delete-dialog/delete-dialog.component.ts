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
  @Output() confirmed = new EventEmitter<boolean>();

  onSubmit(value: boolean) {
    this.confirmed.emit(value);
  }
}
