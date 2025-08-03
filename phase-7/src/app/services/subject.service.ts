import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class SubjectService {
  private subjects = new Subject<string>();

  data = this.subjects.asObservable();

  sendMessage(message: string) {
    this.subjects.next(message);
  }
}
