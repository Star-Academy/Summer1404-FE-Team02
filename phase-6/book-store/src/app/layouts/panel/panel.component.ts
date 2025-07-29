import {Component, inject} from '@angular/core';
import {BooksService} from "../../pages/home/books.service";

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css',
})

export class PanelComponent {
  booksService: BooksService = inject(BooksService);
  isModalOpen = false;


  name = "";
  genre = "";
  price = 0;

  changeModalStatus() {
    this.isModalOpen = !this.isModalOpen;
  }

  addBook() {
    this.booksService.addBook({
      name: this.name,
      price: this.price,
      genre: [...(this.genre)],
      id: new Date().getDate().toString(),
      publishData: new Date().toString(),
      author: this.name,
      image: 'https://picsum.photos/200/300',
    })
    this.isModalOpen = !this.isModalOpen;
  }

  removeBook(id: string) {
    this.booksService.deleteBook(id)
  }
}
