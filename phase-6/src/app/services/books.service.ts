import { Injectable } from '@angular/core';
import { Book } from '../pages/home/books/books.model';
import { BOOKS } from '../pages/home/books/DUMMY_BOOKS';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private books = BOOKS;
  search = '';

  constructor() {
    const isExistBooks = localStorage.getItem('books');
    if (isExistBooks) {
      this.books = JSON.parse(isExistBooks);
    }
  }

  get getAllBooks() {
    if (this.search === '') return this.books;

    return this.books.filter((book: Book) =>
      book.name.toLowerCase().includes(this.search),
    );
  }

  private saveBooks() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  selectedBook(bookId: string) {
    return this.books.find((book) => book.id === bookId);
  }

  deleteBook(bookId: string) {
    this.books = this.books.filter((book) => book.id !== bookId);
    this.saveBooks();
  }

  addBook(bookData: Book) {
    this.books.push(bookData);
    this.saveBooks();
  }

  setSearchValue(search: string) {
    console.log();
    this.search = search;
  }

  getSearchValue(): string {
    return this.search;
  }

  updateBook(updatedBook: Book) {
    const index = this.books.findIndex((book) => book.id === updatedBook.id);
    if (index !== -1) {
      this.books[index] = { ...updatedBook };
      this.saveBooks();
    }
  }
}
