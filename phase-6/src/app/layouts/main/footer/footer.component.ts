import { Component } from '@angular/core';
import { HEADER_LINK } from '../header/HEADER_LINK';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  public readonly links = HEADER_LINK;
}
