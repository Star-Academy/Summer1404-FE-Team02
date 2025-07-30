import { Component, inject } from '@angular/core';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css',
})
export class PanelComponent {
  public readonly booksService = inject(BooksService);

  public selectedId!: string;
  public bookName!: string;

  public isModalAddOpen = false;
  public isModalEditOpen = false;

  public isDeleteDialogOpen = false;
  public isDeleteSuccess = false;

  public changeModalAddStatus() {
    this.isModalAddOpen = !this.isModalAddOpen;
  }

  public changeModalEditStatus() {
    this.isModalEditOpen = !this.isModalEditOpen;
  }

  public changeDialogDeleteStatus() {
    this.isDeleteDialogOpen = !this.isDeleteDialogOpen;
  }

  public setSelectedEditId(id: string) {
    this.selectedId = id;
    this.changeModalEditStatus();
  }

  public setSelectedDeleteId(id: string, name: string) {
    this.selectedId = id;
    this.bookName = name;
    this.changeDialogDeleteStatus();
  }

  public onDelete(isAccept: boolean) {
    this.changeDialogDeleteStatus();

    if (isAccept) {
      this.booksService.deleteBook(this.selectedId);
    }
  }

  public onDeleteSuccess(action: 'delete' | 'dismiss') {
    if (this.isDeleteSuccess && action === 'delete') {
      return;
    }
    this.isDeleteSuccess = !this.isDeleteSuccess;
  }
}
