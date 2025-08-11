import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  input,
  output,
  viewChild
} from '@angular/core';
import { BooksService } from '../../../services/books.service';
import { toSignal } from '@angular/core/rxjs-interop';

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

export class DeleteDialogComponent implements AfterViewInit {
  private bookService = inject(BooksService);
  public id = input<string>('');
  public closeModal = output<void>();


  private overlayRef = viewChild<ElementRef>('modalOverlay');

  public book = toSignal(this.bookService.selectBookById(this.id()));

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
}
