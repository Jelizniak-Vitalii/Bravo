import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form-login',
  templateUrl: './formLogin.component.html',
  styleUrls: ['./formLogIn.component.scss']
})
export class FormLogInComponent implements OnInit {
  form: FormGroup;

  constructor(
    private http: HttpClient,
    private router: Router
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
    this.http.post('http://localhost:3000/user/post', this.form.value)
      .subscribe((el)=>{
        this.router.navigate(['./verification'])
      })
  }

}
