import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  input,
  OnInit,
  output,
  signal,
  viewChild,
} from '@angular/core';
import { BookService } from '../../../shared/services/book.service';
import { Book } from '../../main/pages/home/components/books/books.model';

@Component({
  selector: 'app-delete-dialog',
  standalone: true,
  imports: [],
  templateUrl: './delete-dialog.component.html',
  styleUrls: [
    '../shared/shared.component.css',
    './delete-dialog.component.css'
  ]
})

export class DeleteDialogComponent implements OnInit, AfterViewInit {
  private bookService = inject(BookService);
  public id = input<string>('');
  public closeModal = output<void>();


  private overlayRef = viewChild<ElementRef>('modalOverlay');

  public book = signal<Book | null>(null);

  public onDelete() {
    this.bookService.deleteBook(this.id());
    this.onClose();
  }

  ngAfterViewInit(): void {
    this.overlayRef()?.nativeElement.focus();
  }

  public onCloseModalOverlay(event: Event) {
    const targetInput = event.target as HTMLInputElement;
    if (targetInput.classList.contains('modal-overlay')) {
      this.onClose();
    }
  }

  public onClose() {
    this.closeModal.emit();
  }

  ngOnInit() {
    this.bookService.selectBookById(this.id()).subscribe(book => this.book.set(book));
  }
}
