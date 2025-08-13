import { inject, Injectable } from '@angular/core';
import { Book } from '../../layouts/main/pages/home/components/books/books.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { BookHttpService } from './book-http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly httpService = inject(BookHttpService);
  public booksFlow = new BehaviorSubject<Book[]>([]);

  constructor() {
    this.loadBooks();
  }

  public loadBooks() {
    this.httpService.getBooks().subscribe(books => this.booksFlow.next(books));
  }

  public getBooks(): Observable<Book[]> {
    return this.booksFlow.asObservable();
  }

  public selectBookById(bookId: string): Observable<Book> {
    return this.httpService.getBookById(bookId);
  }

  public deleteBook(bookId: string) {
    this.httpService.deleteBook(bookId);
  }

  public addBook(bookData: Book) {
    return this.httpService.createBook(bookData).pipe;
  }

  public updateBook(updatedBook: Book) {
    this.httpService.updateBook(updatedBook);
  }
}
