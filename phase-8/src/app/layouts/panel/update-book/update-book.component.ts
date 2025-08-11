import {
  Component,
  inject,
  ViewChild,
  AfterViewInit,
  ElementRef,
  input,
  output,
  signal,
  OnInit,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BooksService } from '../../../services/books.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Book } from '../../../pages/home/books/books.model';

@Component({
  selector: 'app-update-book',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-book.component.html',
  styleUrl: '../shared/shared.component.css',
})
export class UpdateBookComponent implements OnInit, AfterViewInit {
  private readonly bookService = inject(BooksService);
  public id = input<string>('');
  public closeModal = output();

  public book = signal<Book>({} as Book);

  @ViewChild('modalOverlay') overlayRef!: ElementRef;

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

  ngAfterViewInit(): void {
    this.overlayRef.nativeElement.focus();
  }

  ngOnInit() {
    this.bookService
      .selectBookById(this.id())
      .subscribe((book) => this.book.set(book));
  }
}
