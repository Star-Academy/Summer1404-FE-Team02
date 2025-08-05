import {Injectable, Signal} from '@angular/core';
import {Book} from '../pages/home/books/books.model';
import {BOOKS} from '../pages/home/books/DUMMY_BOOKS';
import {BehaviorSubject, map} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private books: Book[] = BOOKS;
  public booksFlow = new BehaviorSubject<Book[]>([]);

  constructor() {
    const isExistBooks = localStorage.getItem('books');
    if (isExistBooks) {
      this.books = JSON.parse(isExistBooks);
    }
  }

  public getBooks(search?: Signal<string>) {
    return this.booksFlow.pipe(
      map((books) => {
          if (!search) {
            return this.booksFlow.next(books);
          } else {
            books.filter((book) =>
              book.name.toLowerCase().includes(search().toString().trim().toLowerCase()),
            )
          }
        }
      )
    );

  }

  private saveBooks() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  public selectBookById(bookId: string) {
    return this.booksFlow.pipe(
      map((books) => books.find(book => book.id === bookId))
    );
  }

  public deleteBook(bookId: string) {
    this.books = this.books.filter((book) => book.id !== bookId);
    this.booksFlow.next(this.books);
    this.saveBooks();
  }

  public addBook(bookData: Book) {
    this.books.push(bookData);
    this.booksFlow.next(this.books);
    this.saveBooks();
  }

  public updateBook(updatedBook: Book) {
    const index = this.books.findIndex((book) => book.id === updatedBook.id);
    if (index !== -1) {
      this.books[index] = {...updatedBook};
      this.saveBooks();
    }

    this.booksFlow.next(this.books);
  }
}
