import { Component, DoCheck, inject, OnInit } from '@angular/core';
import { BooksService } from '../../../services/books.service';
import { BookCardComponent } from './book-card/book-card.component';
import { Book } from './books.model';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [BookCardComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent implements DoCheck, OnInit {
  booksService = inject(BooksService);
  books: Book[] = [];
  previousSearch = '';

  ngOnInit() {
    this.books = this.booksService.getAllBooks;
  }

  ngDoCheck() {
    const currentSearch = this.booksService.getSearchValue();
    if (currentSearch !== this.previousSearch) {
      this.previousSearch = currentSearch;
      this.books = this.booksService.getAllBooks;
    }
  }
}
