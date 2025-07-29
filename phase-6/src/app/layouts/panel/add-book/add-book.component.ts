import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BooksService } from '../../../services/books.service';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-book.component.html',
  styleUrl: '../shared/shared.component.css',
})
export class AddBookComponent {
  booksService = inject(BooksService);

  name = '';
  genre = '';
  price = 0;

  @Output() closeModal = new EventEmitter();

  onCancel() {
    this.closeModal.emit();
  }

  addBook() {
    this.booksService.addBook({
      name: this.name,
      price: this.price,
      genre: [...this.genre],
      id: new Date().getDate().toString(),
      publishData: new Date().toString(),
      author: this.name,
      image: 'https://picsum.photos/200/300',
    });

    this.onCancel();
  }

  onCloseModal(event: MouseEvent) {
    if (event.target === event.currentTarget) this.onCancel();
  }
}
