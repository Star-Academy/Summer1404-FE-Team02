import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BooksService } from '../../../services/books.service';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css',
})
export class TopBarComponent {
  private readonly booksService: BooksService = inject(BooksService);
  public readonly search = '';

  searchBook() {
    this.booksService.setSearchValue(this.search.toLowerCase());
  }
}
