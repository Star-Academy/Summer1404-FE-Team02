import { Component, inject } from '@angular/core';
import { BooksService } from '../books.service';
import { BookCardComponent } from './book-card/book-card.component';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [BookCardComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent {
  booksService = inject(BooksService);
}
