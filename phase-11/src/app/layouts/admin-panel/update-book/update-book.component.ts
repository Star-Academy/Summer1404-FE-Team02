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
import {BookHttpService} from "../../../shared/services/book-http.service";

@Component({
  selector: 'app-update-book',
  standalone: true,
  imports: [FormsModule, ModalComponent],
  templateUrl: './update-book.component.html',
  styleUrl: './update-book.component.css'
})
export class UpdateBookComponent implements OnInit {
  private readonly bookService = inject(BookService);
  private readonly bookHttpService = inject(BookHttpService);

  public id = input.required<string>();
  public closeModal = output();

  public book = signal<Book>({} as Book);


  public onClose() {
    this.closeModal.emit();
  }


  public onUpdateBook() {
    this.bookHttpService.updateBook(this.book()).subscribe({
      next: () => this.bookService.loadBooks()
    })

    this.closeModal.emit();
  }

  public onChangeInput(event: Event) {
    const desiredInput = event.target as HTMLInputElement;
    this.book.update((book) => {
      return { ...book, [desiredInput.name]: desiredInput.value };
    });
  }

  public ngOnInit() {
    this.bookHttpService
      .getBookById(this.id())
      .subscribe((book) => this.book.set(book));
  }
}
