import {
  Component,
  inject,
  ViewChild,
  AfterViewInit,
  ElementRef, input, output, computed,
} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BooksService} from '../../../services/books.service';

@Component({
  selector: 'app-update-book',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-book.component.html',
  styleUrl: '../shared/shared.component.css',
})
export class UpdateBookComponent implements AfterViewInit {
  private readonly booksService = inject(BooksService);
  public id = input<string>()
  public closeModal = output()
  public book = computed(() => {
    return this.booksService.selectBookById(this.id()!)
  })


  @ViewChild('modalOverlay') overlayRef!: ElementRef;

  public onClose() {
    this.closeModal.emit();
  }

  public onUpdateBook() {
    this.booksService.updateBook(this.book().subscribe(() =>{}));
    this.closeModal.emit();
  }

  public onCloseModal(event: MouseEvent | KeyboardEvent) {
    if (event instanceof MouseEvent) {
      if (event.target === event.currentTarget) this.onClose();
    } else if (event instanceof KeyboardEvent) {
      if (event.key === 'Escape') {
        this.onClose();
      }
    }
  }


  ngAfterViewInit(): void {
    this.overlayRef.nativeElement.focus();
  }
}
