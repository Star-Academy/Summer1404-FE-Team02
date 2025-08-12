import {inject, Injectable} from '@angular/core';
import {Book} from '../../layouts/main/pages/home/components/books/books.model';
import {BOOKS} from '../../layouts/main/pages/home/components/books/DUMMY_BOOKS';
import {BehaviorSubject, map, Observable} from 'rxjs';
import {HttpService} from "./http.service";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private readonly httpService = inject(HttpService);
  public booksFlow = new BehaviorSubject<Book[]>([]);

  constructor() {
    // const storedBooks = localStorage.getItem('booksSource');
    // this.booksSource = storedBooks ? JSON.parse(storedBooks) : BOOKS;
    // this.booksFlow.next(this.booksSource);
  }

  public getBooks(): Observable<Book[]> {
    return this.httpService.getBook();
  }

  public selectBookById(bookId: string): Observable<Book> {
    return this.httpService.getBookById(bookId);
  }

  public deleteBook(bookId: string) {
    this.httpService.deleteBook(bookId);
  }

  public addBook(bookData: Book) {
    this.httpService.createBook(bookData).subscribe(() => {
      next: (value: Book) => console.log(value)
    });
  }

  public updateBook(updatedBook: Book) {
    this.httpService.updateBook(updatedBook);
  }
}
