import {
  Component,
  inject,
  ViewChild,
  AfterViewInit,
  ElementRef, input, output,
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
  private readonly booksService = inject(BooksService);
  public id = input<string>("")
  public closeModal = output()

  public book = toSignal(this.booksService.selectBookById(this.id()), {initialValue: {} as Book})

  @ViewChild('modalOverlay') overlayRef!: ElementRef;

  public onClose() {
    this.closeModal.emit();
  }

  public onUpdateBook() {
    this.booksService.updateBook(this.book());
    this.closeModal.emit();
  }

  ngAfterViewInit(): void {
    this.overlayRef.nativeElement.focus();
  }
}
