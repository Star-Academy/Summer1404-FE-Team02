import {Pipe, PipeTransform} from '@angular/core';
import {Book} from "./books.model";

@Pipe({
  name: 'searchBooks',
  standalone: true
})

export class SearchBooksPipe implements PipeTransform {
  transform(books: Book[], query: string): Book[] {
    return books.filter((book: Book) => book.name.toLowerCase().includes(query.trim().toLowerCase()));
  }
}
