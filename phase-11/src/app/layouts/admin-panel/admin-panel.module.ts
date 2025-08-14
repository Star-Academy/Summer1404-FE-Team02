import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { adminPanelRoutes } from './admin-panel.routes';
import { AdminPanelComponent } from './admin-panel.component';
import { FormsModule } from '@angular/forms';
import { AddBookComponent } from './add-book/add-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { SuccessDeleteToastComponent } from './success-delete-toast/success-delete-toast.component';

@NgModule({
  declarations: [AdminPanelComponent],
  imports: [
    RouterModule.forChild(adminPanelRoutes),
    FormsModule,
    AddBookComponent,
    UpdateBookComponent,
    DeleteDialogComponent,
    SuccessDeleteToastComponent,
  ],
})
export class AdminPanelModule {}
