import { Component, inject } from '@angular/core';
import { BooksService } from '../../services/books.service';

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
  isDeleteDiologOpen = false;
  // isDeleting = false;
  // isDeleteAccepted = false;

  changeModalAddStatus() {
    this.isModalAddOpen = !this.isModalAddOpen;
  }

  changeModalEditStatus() {
    this.isModalEditOpen = !this.isModalEditOpen;
  }

  setSelectedId(id: string) {
    this.selectedId = id;
    this.changeModalEditStatus();
  }

  // onDeleteDialog(id: string) {
  //   this.changeModalAddStatus();

  //   this.isDeleting = true;

  //   while (this.isDeleting) {
  //     // do nothing
  //   }

  //   this.booksService.deleteBook(id);
  // }

  // onDeleteAccepted() {
  //   this.changeModalAddStatus();
  // }
}
