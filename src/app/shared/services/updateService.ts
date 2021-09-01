import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class UpdateService {
  update = new Subject();

  private data = new BehaviorSubject(false);
  data$ = this.data.asObservable();

  changeData(data: boolean) {
   return this.data.next(data)
  }

}
