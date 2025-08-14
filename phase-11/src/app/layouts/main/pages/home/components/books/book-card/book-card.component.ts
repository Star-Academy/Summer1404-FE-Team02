import {Component, input} from '@angular/core';
import {type Book} from '../books.model';
import {RouterLink} from '@angular/router';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css',
})
export class BookCardComponent {
  book = input.required<Book>();
}
