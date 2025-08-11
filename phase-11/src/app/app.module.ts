import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { MainModule } from './layouts/main/main.module';
import {AdminPanelModule} from "./layouts/admin-panel/admin-panel.module";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot(routes),
    RouterOutlet,
    BrowserModule,
    MainModule,
    AdminPanelModule,
  ],
})
export class AppModule {}
