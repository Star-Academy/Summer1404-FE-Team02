import {Component, input, output} from '@angular/core';

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
  public name = input.required<string>()
  public submitted = output<boolean>()
  public successDelete = output<"delete" | "dismiss">()

  public onSubmit(value: boolean) {
    this.submitted.emit(value);
    if (value) {
      this.successDelete.emit('delete');
    }
  }
}
