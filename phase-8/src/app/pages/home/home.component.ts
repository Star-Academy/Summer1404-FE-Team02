import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  public search = signal<string>("")

  public onChangeSearchQuery(search: string) {
    this.search.set(search);
  }
}
