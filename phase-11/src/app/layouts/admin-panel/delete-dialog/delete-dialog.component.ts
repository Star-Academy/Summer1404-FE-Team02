import {
  Component,
  inject,
  input,
  OnInit,
  output,
  signal
} from '@angular/core';
import { BookService } from '../../../shared/services/book.service';
import { Book } from '../../main/pages/home/components/books/books.model';
import { ModalComponent } from '../shared/components/modal/modal.component';
import {BookHttpService} from "../../../shared/services/book-http.service";

@Component({
  selector: 'app-delete-dialog',
  standalone: true,
  imports: [
    ModalComponent
  ],
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})

export class DeleteDialogComponent implements OnInit {
  private bookService = inject(BookService);
  private bookHttpService = inject(BookHttpService);
  public id = input<string>('');
  public closeModal = output<void>();
  public book = signal<Book | null>(null);


  public onDelete() {
    this.bookHttpService.deleteBook(this.id()).subscribe({
      next: () => this.bookService.loadBooks()
    })
    this.onClose();
  }

  public onClose() {
    this.closeModal.emit();
  }

  ngOnInit() {
    this.bookHttpService.getBookById(this.id()).subscribe({
      next: (book: Book) => this.book.set(book)
    })
  }
}
