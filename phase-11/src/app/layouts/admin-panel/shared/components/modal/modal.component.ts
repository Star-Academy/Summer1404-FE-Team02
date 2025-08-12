import {Component, input, output} from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {public onClose = input.required<() => void>();
  public onCloseModalOverlay = input.required<(event: MouseEvent) => void>();
}
