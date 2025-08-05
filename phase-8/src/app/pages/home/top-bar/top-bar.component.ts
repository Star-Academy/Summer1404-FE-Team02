import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BooksService} from '../../../services/books.service';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css',
})
export class TopBarComponent {
  booksService = inject(BooksService)

  onChangeSearchInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.booksService.searchBooks(value);
  }
}
