import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor() {
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authService = localStorage.getItem('token');
    let tokenizeReq: HttpRequest<any>;
    tokenizeReq = req.clone({
      setHeaders: {
        Authorization:  `${authService}`,
        'Content-Type': 'application/json'
      }
    });
    console.log(tokenizeReq)
    return next.handle(tokenizeReq);
  }
}
