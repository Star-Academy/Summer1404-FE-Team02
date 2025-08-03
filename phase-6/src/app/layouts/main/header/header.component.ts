import { Component } from '@angular/core';
import { HEADER_LINK } from './HEADER_LINK';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  public readonly links = HEADER_LINK;
}
