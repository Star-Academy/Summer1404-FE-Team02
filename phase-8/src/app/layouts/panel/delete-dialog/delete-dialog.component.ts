import {Component, inject, input, OnInit, output, signal} from '@angular/core';
import {BooksService} from "../../../services/books.service";
import {Book} from "../../../pages/home/books/books.model";

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

export class DeleteDialogComponent implements OnInit {
  private bookService = inject(BooksService);
  public id = input<string>("");
  public closeModal = output<void>();

  public book = signal<Book | null>(null);

  public onDelete() {
    this.bookService.deleteBook(this.id());
  }

  public onClose() {
    this.closeModal.emit()
  }

  ngOnInit() {
    this.bookService.selectBookById(this.id()).subscribe(book => this.book.set(book))
  }
}
