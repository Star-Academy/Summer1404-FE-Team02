import {Component, computed, inject, input, output} from '@angular/core';
import {BooksService} from '../../../services/books.service';
import {BookCardComponent} from './book-card/book-card.component';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [BookCardComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent {
  private readonly booksService = inject(BooksService);
  search = output<string>();

  public books = computed(() => this.booksService.getBooks())
}
