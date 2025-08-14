import {Component, OnInit, inject, signal} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../home/components/books/books.model';
import { BookService } from '../../../../shared/services/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
  standalone: true,
})
export class BookDetailComponent implements OnInit {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private readonly booksService = inject(BookService);

  private bookId: string | null = null;
  public book = signal<Book>({} as Book);

  public ngOnInit(): void {
    this.bookId = this.route.snapshot.paramMap.get('bookId');

    if (this.bookId) {
      this.booksService.selectBookById(this.bookId).subscribe(book => {
        if (book) {
          this.book.set(book);
        }
        else {
          this.router.navigate(['/'], { replaceUrl: true });
        }
      });
    }
  }

  public get formattedDate(): string {
    return new Date(this.book().publishDate).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }
}
