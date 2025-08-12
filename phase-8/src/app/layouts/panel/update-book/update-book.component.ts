import {
  Component,
  inject,
  AfterViewInit,
  ElementRef,
  input,
  output,
  signal,
  OnInit, viewChild
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BooksService } from '../../../services/books.service';
import { Book } from '../../../pages/home/books/books.model';

@Component({
  selector: 'app-update-book',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-book.component.html',
  styleUrl: '../shared/shared.component.css'
})
export class UpdateBookComponent implements OnInit, AfterViewInit {
  private readonly bookService = inject(BooksService);
  public id = input<string>('');
  public closeModal = output();

  public book = signal<Book>({} as Book);

  private overlayRef = viewChild<ElementRef>('modalOverlay');

  public onClose() {
    this.closeModal.emit();
  }

  public onCloseModalOverlay(event: Event) {
    const targetInput = event.target as HTMLInputElement;
    if (targetInput.classList.contains('modal-overlay')) {
      this.onClose();
    }
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

  ngAfterViewInit(): void {
    this.overlayRef()?.nativeElement.focus();
  }

  ngOnInit() {
    this.bookService
      .selectBookById(this.id())
      .subscribe((book) => this.book.set(book));
  }
}
