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
  public id = input<string>('');
  public closeModal = output<void>();
  public book = signal<Book | null>(null);


  public onDelete() {
    this.bookService.deleteBook(this.id());
    this.onClose();
  }

  public onClose() {
    this.closeModal.emit();
  }

  ngOnInit() {
    this.bookService.selectBookById(this.id()).subscribe(book => this.book.set(book));
  }
}
