import { Component, inject } from '@angular/core';
import { BooksService } from '../../../services/books.service';
import { BookCardComponent } from './book-card/book-card.component';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [BookCardComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent {
  private readonly booksService = inject(BooksService);

  books = toSignal(this.booksService.getBooks(), { initialValue: [] });
}
