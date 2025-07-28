import { Component, Input } from '@angular/core';
import { type Book } from '../books.model';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css',
})
export class BookComponent {
  @Input({ required: true }) book!: Book;

  get bookGenres() {
    return this.book.genre.map((g) => `<span>${g}</span>`).join('');
  }

  get formattedDate() {
    return new Date(this.book.publishData).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }
}
