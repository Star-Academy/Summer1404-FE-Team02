import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-q1',
  standalone: true,
  imports: [],
  templateUrl: './q1.component.html',
  styleUrl: './q1.component.css'
})
export class Q1Component implements OnInit {
  customObservable!: Observable<number>;

  ngOnInit() {
    this.customObservable = new Observable<number>(observer => {
      for (let i = 1; i <= 5; i++) {
        observer.next(i);
      }
      observer.complete();
    })

    this.customObservable.subscribe({
      next: (value) => console.log(value),
      error: (error) => console.log(error),
      complete: () => console.log('completed!'),
    })
  }


}
