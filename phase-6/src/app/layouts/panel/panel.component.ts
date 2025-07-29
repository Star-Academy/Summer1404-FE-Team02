import { Component, inject } from '@angular/core';
import { BooksService } from '../../pages/home/books.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css',
})
export class PanelComponent {
  booksService = inject(BooksService);

  selectedId!: string;
  isModalAddOpen = false;
  isModalEditOpen = false;

  changeModalAddStatus() {
    this.isModalAddOpen = !this.isModalAddOpen;
  }

  changeModalEditStatus() {
    this.isModalEditOpen = !this.isModalEditOpen;
  }

  setSelectedId(id: string) {
    this.selectedId = id;
    this.changeModalEditStatus()
  }

  removeBook(id: string) {
    this.booksService.deleteBook(id);
  }
}
