import { Injectable } from '@angular/core';
import { Book } from './books/books.model';
import { BOOKS } from './books/DUMMY_BOOKS';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private books = BOOKS;
  search = "";

  get getAllBooks() {
    if (this.search === "") {
      return this.books;
    }
    else {
      return this.books.filter((book: Book) => book.name.toLowerCase().includes(this.search));
    }
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

  setSearchValue(search: string) {
    console.log()
    this.search = search;
  }

  getSearchValue(): string {
    return this.search;
  }
}
