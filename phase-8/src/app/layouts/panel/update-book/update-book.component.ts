import {
  Component,
  inject,
  AfterViewInit,
  ElementRef,
  input,
  output, viewChild
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BooksService } from '../../../services/books.service';
import { Book } from '../../../pages/home/books/books.model';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-update-book',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-book.component.html',
  styleUrl: '../shared/shared.component.css'
})
export class UpdateBookComponent implements AfterViewInit {
  private readonly bookService = inject(BooksService);
  public id = input<string>('');
  public closeModal = output();

  public book = toSignal<Book>(this.bookService.selectBookById(this.id()));

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
    this.bookService.updateBook({ ...this.book(), [desiredInput.name]: desiredInput.value } as Book);
  }

  ngAfterViewInit(): void {
    this.overlayRef()?.nativeElement.focus();
  }
}
