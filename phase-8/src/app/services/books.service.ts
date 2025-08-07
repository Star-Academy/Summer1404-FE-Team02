import {Injectable} from '@angular/core';
import {Book} from '../pages/home/books/books.model';
import {BOOKS} from '../pages/home/books/DUMMY_BOOKS';
import {BehaviorSubject, map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private books: Book[] = [];
  public booksFlow = new BehaviorSubject<Book[]>([]);

  constructor() {
    const isExistBooks = localStorage.getItem('books');
    this.books = isExistBooks ? JSON.parse(isExistBooks) : BOOKS;
    this.booksFlow.next(this.books);
  }

  public getBooks(): Observable<Book[]> {
    return this.booksFlow.asObservable();
  }

  public searchBooks(search: string): void {
    if (!search || search.trim() === '') {
      this.booksFlow.next(this.books);
      return;
    }

    const q = search.trim().toLowerCase();
    const filtered = this.books.filter((book) =>
      book.name.toLowerCase().includes(q),
    );
    this.booksFlow.next(filtered);
  }

  private saveBooks() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  public selectBookById(bookId: string) {
    return this.booksFlow.pipe(
      map((books) => books.find((book) => book.id === bookId)),
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
      this.booksFlow.next(this.books);
      this.saveBooks();
    }
  }
}
