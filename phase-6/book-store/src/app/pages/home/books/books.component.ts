import { Component, inject } from '@angular/core';
import { BookComponent } from './book/book.component';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [BookComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent {
  booksService = inject(BooksService);

  
}
