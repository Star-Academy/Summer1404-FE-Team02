import { Component, OnInit } from '@angular/core';
import { filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-q2',
  standalone: true,
  imports: [],
  templateUrl: './q2.component.html',
  styleUrl: './q2.component.css',
})
export class Q2Component implements OnInit {
  counterObservable!: Observable<number>;

  ngOnInit(): void {
    this.counterObservable = new Observable((observer) => {
      for (let i = 1; i <= 10; i++) {
        observer.next(i);
      }
      observer.complete();
    });

    const counterObserver = this.counterObservable.pipe(
      filter((number) => number % 2 === 0),
      map((number) => number ** 2)
    );

    counterObserver.subscribe({
      next: (value) => console.log(value),
      complete: () => {
        console.log('numbers added to observable successfully!');
      },
      error: () => {
        console.log('error occur!');
      },
    });
  }
}
