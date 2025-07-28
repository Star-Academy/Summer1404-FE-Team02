import { Component, Input } from '@angular/core';
import { type Book } from '../books.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css',
})
export class BookCardComponent {
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
