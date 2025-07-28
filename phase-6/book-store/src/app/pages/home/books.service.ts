import { Injectable } from '@angular/core';
import { Book } from './books/books.model';
import { BOOKS } from './books/DUMMY_BOOKS';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private books = BOOKS;

  get getAllBooks() {
    return this.books;
  }

  selectedBook(bookId: string) {
    return this.books.find((book) => book.id === bookId);
  }

  deleteBook(bookId: string) {
    this.books = this.books.filter((book) => book.id !== bookId);
  }

  addBook(bookData: Book) {
    this.books.push(bookData);
  }
}
