import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../home/books/books.model';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
  standalone: true,
})
export class BookDetailComponent implements OnInit {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private booksService = inject(BooksService);

  private bookId: string | null = null;
  public book!: Book;

  ngOnInit(): void {
    this.bookId = this.route.snapshot.paramMap.get('bookId');

    if (this.bookId) {
      this.booksService.selectBookById(this.bookId).subscribe(book => {
        if (book) {
          this.book = book;
        }
        else {
          this.router.navigate(['/'], { replaceUrl: true });
        }
      });
    }
  }

  get formattedDate(): string {
    return new Date(this.book.publishDate).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }
}
