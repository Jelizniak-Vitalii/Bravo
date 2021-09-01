import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface FormValue {
  customerId: number;
  _id: string;
  email: string;
  id: number;
  customerNo: string;
  userName: string;
  deliveryAddress: string;
  deliveryDays: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http: HttpClient) {
  }

  authorization( api: string, formValue: FormValue): Observable<FormValue> {
    return this.http.post<FormValue>( api, formValue)
  }
}
