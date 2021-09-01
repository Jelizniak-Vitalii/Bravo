import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";

import { environment } from "../../../environments/environment";
import { AuthService } from "../../shared/services/auth/authService";


@Component({
  selector: 'app-form-login',
  templateUrl: './formLogin.component.html',
  styleUrls: ['./formLogIn.component.scss']
})

export class FormLogInComponent implements OnInit {
  form: FormGroup;
  registeredUser: boolean = false;
  notifier = new Subject();

  constructor(
    private router: Router,
    private authService: AuthService

  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required
      ])
    })
  }

  submit() {
    this.authService.authorization( environment.API_LOGIN, this.form.value)
      .pipe((takeUntil(this.notifier)))
      .subscribe((el: any) => {
          localStorage.setItem('token', el.token);
          this.router.navigate(['./verification'])
      }, error => {
        this.registeredUser = true;
      })
  }

  ngOnDestroy() {
    this.notifier.next();
    this.notifier.complete();
  }

}
