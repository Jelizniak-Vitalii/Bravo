import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";

import { AuthService } from "../../shared/services/auth/authService";
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-form-registration',
  templateUrl: './formRegistration.component.html',
  styleUrls: ['./formRegistration.component.scss']
})
export class FormRegistrationComponent implements OnInit {

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
      ]),
      customerNo: new FormControl('',[
        Validators.required
      ]),
      userName: new FormControl('',[
        Validators.required
      ]),
      deliveryAddress: new FormControl('',[
        Validators.required
      ]),
      days: new FormGroup({
        mon: new FormControl(''),
        tue: new FormControl(''),
        wed: new FormControl(''),
        thu: new FormControl(''),
        fri: new FormControl(''),
        sat: new FormControl(''),
        sun: new FormControl('')
      })

    })
  }

  get days() {
    return this.form.get('days') as FormGroup
  }

  submit() {
    console.log(this.form.value)
    if (this.form.valid) {
      this.authService.authorization(environment.API_REGISTRATION, this.form.value)
        .pipe(takeUntil(this.notifier))
        .subscribe((el: any) => {
            this.router.navigate(['/formLogIn']);
        }, error => {
          this.registeredUser = true;
        })
    }
  }

  ngOnDestroy() {
    this.notifier.next();
    this.notifier.complete();
  }

}
