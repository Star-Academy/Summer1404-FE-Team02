import { Component, inject, input } from '@angular/core';
import { BookService } from '../../../../../../shared/services/book.service';
import { BookCardComponent } from './book-card/book-card.component';
import { SearchBooksPipe } from './search-books.pipe';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [BookCardComponent, SearchBooksPipe],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  private readonly booksService = inject(BookService);
  public searchQuery = input.required<string>();

  public books = toSignal(this.booksService.getBooks(), { initialValue: [] });
}
