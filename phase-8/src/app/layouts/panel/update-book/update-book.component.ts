import {
  Component,
  inject,
  ViewChild,
  AfterViewInit,
  ElementRef, input, output, signal,
} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BooksService} from '../../../services/books.service';
import {toSignal} from "@angular/core/rxjs-interop";
import {Book} from "../../../pages/home/books/books.model";

@Component({
  selector: 'app-update-book',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-book.component.html',
  styleUrl: '../shared/shared.component.css',
})
export class UpdateBookComponent implements AfterViewInit {
  private readonly bookService = inject(BooksService);
  public id = input<string>("")
  public closeModal = output()

  public book = signal<Book | null>(null)

  @ViewChild('modalOverlay') overlayRef!: ElementRef;

  public onClose() {
    this.closeModal.emit();
  }

  public onUpdateBook() {
    this.bookService.updateBook(this.book()!);
    this.closeModal.emit();
  }

  ngAfterViewInit(): void {
    this.overlayRef.nativeElement.focus();
  }

  ngOnInit() {
    this.bookService.selectBookById(this.id()).subscribe(book => this.book.set(book));
  }
}
