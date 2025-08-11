import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-success-delete-toast',
  standalone: true,
  imports: [],
  templateUrl: './success-delete-toast.component.html',
  styleUrl: './success-delete-toast.component.css',
})
export class SuccessDeleteToastComponent implements OnInit {
  @Output() dismissed = new EventEmitter<'dismiss'>();

  ngOnInit(): void {
    setTimeout(() => {
      this.dismissed.emit('dismiss');
    }, 3000);
  }
}
