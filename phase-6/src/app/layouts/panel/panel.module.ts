import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { panelRoutes } from './panel.routes';
import { PanelComponent } from './panel.component';
import {FormsModule} from "@angular/forms";
import {AddBookComponent} from "./add-book/add-book.component";
import {UpdateBookComponent} from "./update-book/update-book.component";

@NgModule({
  declarations: [PanelComponent],
  imports: [RouterModule.forChild(panelRoutes), FormsModule, AddBookComponent, UpdateBookComponent],
})
export class PanelModule {}
