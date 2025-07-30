import { Component } from '@angular/core';
import { HEADER_LINK } from './HEADER_LINK';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  public readonly links = HEADER_LINK;
}
