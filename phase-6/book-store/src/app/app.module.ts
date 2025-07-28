import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './layouts/main/main.component';
import { MainModule } from './layouts/main/main.module';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot(routes),
    RouterOutlet,
    BrowserModule,
    MainModule,
  ],
})
export class AppModule {}
