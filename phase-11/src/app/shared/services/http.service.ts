import {inject, Injectable} from '@angular/core';
import {Book} from "../../layouts/main/pages/home/components/books/books.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly baseUrl = 'http://127.0.0.1:5000/';
  private http = inject(HttpClient);

  public checkServer(): Observable<Book> {
    return this.http.get<Book>(`${this.baseUrl}`);
  }

  public getBook(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}books`);
  }

  public getBookById(id: string): Observable<Book> {
    return this.http.get<Book>(`${this.baseUrl}books/${id}`);
  }

  public createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(`${this.baseUrl}books`, book);
  }

  public updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.baseUrl}books/${book.id}`, book);
  }

  public deleteBook(id: string): Observable<Book> {
    return this.http.delete<Book>(`${this.baseUrl}books/${id}`);
  }
}
