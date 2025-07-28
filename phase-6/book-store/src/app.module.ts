import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {RouterModule, RouterOutlet} from "@angular/router";
import {routes} from "./app.routes";
import {HomeComponent} from "./app/home/home.component";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, HomeComponent],
  imports: [RouterModule.forRoot(routes), RouterOutlet, BrowserModule]
})

export class AppModule {}
