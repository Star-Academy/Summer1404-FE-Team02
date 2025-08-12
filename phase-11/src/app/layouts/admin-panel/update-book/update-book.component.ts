import {
  Component,
  inject,
  input,
  output,
  signal,
  OnInit
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../../shared/services/book.service';
import { Book } from '../../main/pages/home/components/books/books.model';
import { ModalComponent } from '../shared/components/modal/modal.component';

@Component({
  selector: 'app-update-book',
  standalone: true,
  imports: [FormsModule, ModalComponent],
  templateUrl: './update-book.component.html',
  styleUrl: './update-book.component.css'
})
export class UpdateBookComponent implements OnInit {
  private readonly bookService = inject(BookService);
  public id = input<string>('');
  public closeModal = output();

  public book = signal<Book>({} as Book);


  public onClose() {
    this.closeModal.emit();
  }


  public onUpdateBook() {
    this.bookService.updateBook(this.book()!);
    this.closeModal.emit();
  }

  public onChangeInput(event: Event) {
    const desiredInput = event.target as HTMLInputElement;
    this.book.update((book) => {
      return { ...book, [desiredInput.name]: desiredInput.value };
    });
  }

  ngOnInit() {
    this.bookService
      .selectBookById(this.id())
      .subscribe((book) => this.book.set(book));
  }
}
