import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit {
  @ViewChild('firstVerificationNumber') firstVerificationNumber: ElementRef;
  @ViewChild('secondVerificationNumber') secondVerificationNumber: ElementRef;

  form: FormGroup;

  constructor() { }

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
    // if(this.form.get('secondVerificationNumber')?.value.length === 0   ){
    //   this.firstVerificationNumber.nativeElement.focus()
    // }
  }

}
