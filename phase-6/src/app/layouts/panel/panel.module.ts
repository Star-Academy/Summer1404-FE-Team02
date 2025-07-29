import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { panelRoutes } from './panel.routes';
import { PanelComponent } from './panel.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [PanelComponent],
  imports: [RouterModule.forChild(panelRoutes), FormsModule],
})
export class PanelModule {}
