import {Component, inject, input, signal,} from '@angular/core';
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
  search = signal<string>("");

  onChangeSearchInput(event: Event) {
  }
}
