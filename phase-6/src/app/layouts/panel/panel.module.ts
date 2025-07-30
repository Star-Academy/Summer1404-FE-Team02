import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { panelRoutes } from './panel.routes';
import { PanelComponent } from './panel.component';
import {FormsModule} from "@angular/forms";
import {AddBookComponent} from "./add-book/add-book.component";
import {UpdateBookComponent} from "./update-book/update-book.component";
import { DeleteDialogComponent } from "./delete-dialog/delete-dialog.component";
import { SuccessDeleteToastComponent } from "./success-delete-toast/success-delete-toast.component";

@NgModule({
  declarations: [PanelComponent],
  imports: [RouterModule.forChild(panelRoutes), FormsModule, AddBookComponent, UpdateBookComponent, DeleteDialogComponent, SuccessDeleteToastComponent],
})
export class PanelModule {}
