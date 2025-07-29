import {
  Component,
  EventEmitter,
  Input,
  Output,
  inject,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BooksService } from '../../../pages/home/books.service';
import { Book } from '../../../pages/home/books/books.model';

@Component({
  selector: 'app-update-book',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-book.component.html',
  styleUrl: '../shared/shared.component.css',
})
export class UpdateBookComponent implements OnChanges {
  booksService = inject(BooksService);
  book!: Book;

  @Input() id!: string;
  @Output() closeModal = new EventEmitter();

  onCancel() {
    this.closeModal.emit();
  }

  onUpdateBook() {
    this.booksService.updateBook(this.book);
    this.closeModal.emit();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['id'] && this.id) {
      const isBook = this.booksService.selectedBook(this.id);
      if (isBook) {
        this.book = { ...isBook };
      }
    }
  }
}
