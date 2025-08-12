import {Component, output} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css',
})
export class TopBarComponent {
  public searchQuery = output<string>()

  public onChangeSearchInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.searchQuery.emit(value);
  }
}
