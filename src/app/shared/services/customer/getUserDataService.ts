import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface FormValue {
  token: string | null;
  event: any,
  }

@Injectable({
  providedIn: 'root'
})

export class GetUserDataService {
  constructor(private http: HttpClient) {
  }

  usersData( api: string, formValue: FormValue): Observable<FormValue> {
    return this.http.post<FormValue>( api, formValue)
  }
}
