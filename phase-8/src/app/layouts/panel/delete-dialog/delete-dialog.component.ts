import {Component, inject, input, OnInit, Signal, WritableSignal} from '@angular/core';
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
  public id = input.required<string>();
  private bookService = inject(BooksService);
  public book!: WritableSignal<Book>;

  ngOnInit() {
    this.bookService.selectBookById(this.id()).subscribe(book => {
      this.book.set(book)
    })
  }

  public onSubmit(value: boolean) {
    if (value) {
      this.bookService.deleteBook(this.id());
    }
  }
}
