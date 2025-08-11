import {Component, inject, input, OnInit, signal} from '@angular/core';
import {BookService} from '../../../services/book.service';
import {BookCardComponent} from './book-card/book-card.component';
import {SearchBooksPipe} from "./search-books.pipe";
import {Book} from "./books.model";

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [BookCardComponent, SearchBooksPipe],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent implements OnInit {
  private readonly booksService = inject(BookService);
  public searchQuery = input.required<string>();

  public books = signal<Book[]>([]);

  ngOnInit() {
    this.booksService.getBooks().subscribe(books => {
      this.books.set(books)
    });
  }
}
