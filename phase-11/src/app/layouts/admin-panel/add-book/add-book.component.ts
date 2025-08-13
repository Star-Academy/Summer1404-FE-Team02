import {Component, EventEmitter, inject, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BookService} from '../../../shared/services/book.service';
import {ModalComponent} from '../shared/components/modal/modal.component';
import {BookHttpService} from '../../../shared/services/book-http.service';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [FormsModule, ModalComponent],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {
  private readonly bookService = inject(BookService);
  private readonly bookHttpService = inject(BookHttpService);

  public name = '';
  public image = '';
  public genre = '';
  public author = '';
  public publishDate = '';
  public price = 0;

  @Output() closeModal = new EventEmitter();

  public onClose() {
    this.closeModal.emit();
  }

  public addBook() {
    const createdBook = {
      id: new Date().getMilliseconds().toString(),
      name: this.name,
      image: this.image,
      genre: [...this.genre.split(',')],
      author: this.name,
      publishDate: new Date(this.publishDate).toISOString().split('T')[0],
      price: this.price
    };

    this.bookHttpService.createBook(createdBook).subscribe({
      next: () => {
        // this.bookService.addBook(createdBook);
        this.bookService.loadBooks();
      },
      error: err => {
        window.alert(err.message())
        this.closeModal.emit();
      }
    });

    this.onClose();
  }

  public onCloseModal(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.onClose();
    }
  }
}
