import {Component, OnInit} from '@angular/core';
import {DataService} from "../services/data.service";
import {Post} from "../models/post.model";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-q3',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './q3.component.html',
  styleUrl: './q3.component.css'
})

export class Q3Component implements OnInit {
  private posts!: Post[];

  constructor(private _httpService: DataService) {
  }

  ngOnInit() {
    // this._httpService.getData().subscribe(response => {
    //     this.posts = response
    //     console.log(response)
    //   }
    // )
    this._httpService.getData().subscribe({
      next: response => {
        this.posts = response
        console.log(response)
      }
    })
  }

}
