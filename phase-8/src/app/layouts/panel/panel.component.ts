import {Component, inject, signal} from '@angular/core';
import {BooksService} from '../../services/books.service';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css',
})
export class PanelComponent {
  public readonly booksService = inject(BooksService);
  public books = toSignal(this.booksService.getBooks(), {initialValue: []});

  public selectedId = signal<string>("");
  public bookName =  signal<string>("");

  public isModalAddOpen = signal<boolean>(false);
  public isModalEditOpen = signal<boolean>(false);

  public isDeleteDialogOpen = signal<boolean>(false);
  public isDeleteSuccess = signal<boolean>(false);

  public changeModalAddStatus() {
    this.isModalAddOpen.update((currentValue) => !currentValue);
  }

  public changeModalEditStatus() {
    this.isModalEditOpen.update((currentValue) => !currentValue);
  }

  public changeDialogDeleteStatus() {
    this.isDeleteDialogOpen.update((currentValue) => !currentValue);
  }

  public setSelectedEditId(id: string) {
    this.selectedId.set(id);
    this.changeModalEditStatus();
  }

  public setSelectedDeleteId(id: string, name: string) {
    this.selectedId.set(id);
    this.bookName.set(name);
    this.changeDialogDeleteStatus();
  }

  public onDeleteBook(isAccept: boolean) {
    this.changeDialogDeleteStatus();

    if (isAccept) {
      this.booksService.deleteBook(this.selectedId().toString());
    }
  }

  public onDeleteSuccess(action: 'delete' | 'dismiss') {
    if (action === 'delete') {
      return;
    }
    this.isDeleteSuccess.update((currentValue) => !currentValue);
  }
}
