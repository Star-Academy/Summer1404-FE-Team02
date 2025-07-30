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
  bookName!: string;

  isModalAddOpen = false;
  isModalEditOpen = false;

  isDeleteDialogOpen = false;
  isDeleteSuccess = false;

  changeModalAddStatus() {
    this.isModalAddOpen = !this.isModalAddOpen;
  }

  changeModalEditStatus() {
    this.isModalEditOpen = !this.isModalEditOpen;
  }

  changeDialogDeleteStatus() {
    this.isDeleteDialogOpen = !this.isDeleteDialogOpen;
  }

  setSelectedEditId(id: string) {
    this.selectedId = id;
    this.changeModalEditStatus();
  }

  setSelectedDeleteId(id: string, name: string) {
    this.selectedId = id;
    this.bookName = name;
    this.changeDialogDeleteStatus();
  }

  onDelete(isAccept: boolean) {
    this.changeDialogDeleteStatus();

    if (isAccept) {
      this.booksService.deleteBook(this.selectedId);
    }
  }

  onDeleteSuccess(action: 'delete' | 'dismiss') {
    if (this.isDeleteSuccess && action === 'delete') {
      return;
    }
    this.isDeleteSuccess = !this.isDeleteSuccess;
  }
}
