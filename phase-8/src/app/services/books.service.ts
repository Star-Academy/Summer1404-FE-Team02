import {Injectable} from '@angular/core';
import {Book} from '../pages/home/books/books.model';
import {BOOKS} from '../pages/home/books/DUMMY_BOOKS';
import {BehaviorSubject, map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private booksSource: Book[] = [];
  public booksFlow = new BehaviorSubject<Book[]>([]);

  constructor() {
    const storedBooks = localStorage.getItem('booksSource');
    this.booksSource = storedBooks ? JSON.parse(storedBooks) : BOOKS;
    this.booksFlow.next(this.booksSource);
  }

  public getBooks(): Observable<Book[]> {
    return this.booksFlow.asObservable();
  }

  private saveBooks() {
    localStorage.setItem('booksSource', JSON.stringify(this.booksSource));
  }

  public selectBookById(bookId: string) {
    return this.booksFlow.pipe(
      map((books) => books.find((book) => book.id === bookId)!),
    );
  }

  public deleteBook(bookId: string) {
    this.booksSource = this.booksSource.filter((book) => book.id !== bookId);
    this.booksFlow.next(this.booksSource);
    this.saveBooks();
  }

  public addBook(bookData: Book) {
    this.booksSource.push(bookData);
    this.booksFlow.next(this.booksSource);
    this.saveBooks();
  }

  public updateBook(updatedBook: Book) {
    const index = this.booksSource.findIndex((book) => book.id === updatedBook.id);
    if (index !== -1) {
      this.booksSource[index] = {...updatedBook};
      this.booksFlow.next(this.booksSource);
      this.saveBooks();
    }
  }
}
