import {Component, inject, signal} from '@angular/core';
import {BookService} from '../../shared/services/book.service';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css',
})
export class AdminPanelComponent {
  public readonly booksService = inject(BookService);
  public books = toSignal(this.booksService.getBooks(), {initialValue: []});

  public selectedBookId = signal<string>("");

  public isAddModalOpen = signal<boolean>(false);
  public isEditModalOpen = signal<boolean>(false);

  public isDeleteDialogOpen = signal<boolean>(false);
  public isDeleteSuccess = signal<boolean>(false);

  public changeAddModalStatus() {
    this.isAddModalOpen.update((currentValue) => !currentValue);
  }

  public changeEditModalStatus() {
    this.isEditModalOpen.update((currentValue) => !currentValue);
  }

  public changeDeleteDialogStatus() {
    this.isDeleteDialogOpen.update((currentValue) => !currentValue);
  }

  public onEditBook(id: string) {
    this.selectedBookId.set(id);
    this.changeEditModalStatus();
  }

  public setSelectedDeleteId(id: string) {
    this.selectedBookId.set(id);
    this.changeDeleteDialogStatus();
  }

  public onDeleteSuccess(action: 'delete' | 'dismiss') {
    if (action === 'delete') {
      return;
    }
    this.isDeleteSuccess.update((currentValue) => !currentValue);
  }
}
