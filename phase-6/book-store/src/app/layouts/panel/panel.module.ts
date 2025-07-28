import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { panelRoutes } from './panel.routes';
import { PanelComponent } from './panel.component';

@NgModule({
  declarations: [PanelComponent],
  imports: [RouterModule.forChild(panelRoutes)],
})
export class PanelModule {}
