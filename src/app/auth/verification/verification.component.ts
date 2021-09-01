import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import {AuthService} from "../../shared/services/auth/authService";
import { environment } from "../../../environments/environment";


@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit {
  @ViewChild('firstVerificationNumber') firstVerificationNumber: ElementRef;
  @ViewChild('secondVerificationNumber') secondVerificationNumber: ElementRef;

  form: FormGroup;
  notifier = new Subject();
  authKey: string;
  response: string;
  invalidCode: boolean;

  constructor(
    private http: HttpClient,
    private route: Router,
    private authService: AuthService


  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      firstVerificationNumber: new FormControl('',[
        Validators.maxLength(3)
      ]),
      secondVerificationNumber: new FormControl('', [
        Validators.maxLength(3)
      ])
    })
  }
  checkForm() {
    if (this.form.get('firstVerificationNumber')?.value.length == 3){
      this.secondVerificationNumber.nativeElement.focus()
    }

    if (this.form.get('firstVerificationNumber')?.value.length == 3 && this.form.get('secondVerificationNumber')?.value.length == 3) {
      this.authService.authorization( environment.API_VERIFICATION, this.form.value)
        .subscribe((el: any) => {
            this.route.navigate(['./mainContent'])
        }, error => {
            this.invalidCode = true
        })

    }
  }

  ngOnDestroy() {
    this.notifier.next();
    this.notifier.complete();
  }



}
