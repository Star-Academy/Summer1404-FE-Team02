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
import { BookService } from '../../../shared/services/book.service';
import { Book } from '../../main/pages/home/components/books/books.model';
import {ModalComponent} from "../shared/components/modal/modal.component";

@Component({
  selector: 'app-update-book',
  standalone: true,
  imports: [FormsModule, ModalComponent],
  templateUrl: './update-book.component.html',
  styleUrl: './update-book.component.css'
})
export class UpdateBookComponent implements OnInit, AfterViewInit {
  private readonly bookService = inject(BookService);
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
