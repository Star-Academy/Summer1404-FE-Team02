import {Component, inject, input, output} from '@angular/core';
import {BooksService} from "../../../services/books.service";
import {Book} from "../../../pages/home/books/books.model";
import {toSignal} from "@angular/core/rxjs-interop";

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
  private bookService = inject(BooksService);
  public id = input<string>("");
  public closeModal = output<void>();
  
  public book = toSignal(this.bookService.selectBookById(this.id()), {initialValue: {} as Book});

  public onDelete() {
    this.bookService.deleteBook(this.id());
  }

  public onClose() {
    this.closeModal.emit()
  }
}
