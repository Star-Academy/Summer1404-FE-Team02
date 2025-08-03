import {Component, OnInit} from '@angular/core';
import {SubjectService} from "../services/subject.service";

@Component({
  selector: 'app-q4',
  standalone: true,
  imports: [],
  templateUrl: './q4.component.html',
  styleUrl: './q4.component.css'
})
export class Q4Component {}

export class receiver implements OnInit{
  private receivedMessage!: string;

  constructor(private SubjectService: SubjectService) {}

  ngOnInit() {
    this.SubjectService.data.subscribe((message: string) => {
      this.receivedMessage = message;
    })
  }
}

export class sender {
  private message!: string;
  constructor(private SubjectService: SubjectService) {}

  send() {
    this.SubjectService.sendMessage(this.message);
    this.message = "";
  }
}
