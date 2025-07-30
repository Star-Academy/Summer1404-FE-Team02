import { Component, EventEmitter, inject, Output } from '@angular/core';
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
  private readonly booksService = inject(BooksService);

  public name = '';
  public genre = '';
  public price = 0;

  @Output() closeModal = new EventEmitter();

  public onCancel() {
    this.closeModal.emit();
  }

  public addBook() {
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

  public onCloseModal(event: MouseEvent | KeyboardEvent) {
    if (event instanceof MouseEvent) {
      if (event.target === event.currentTarget) {
        this.onCancel();
      }
    } else if (event instanceof KeyboardEvent) {
      if (event.key === 'Escape') {
        this.onCancel();
      }
    }
  }
}
