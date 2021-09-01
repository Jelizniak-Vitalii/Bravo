import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";


@Component({
  selector: 'app-confirmation-key',
  templateUrl: './confirmationKey.component.html',
  styleUrls: ['./confirmationKey.component.scss']
})
export class ConfirmationKeyComponent implements OnInit,OnDestroy {
  firstKey: string[];
  secondKey: string[];
  key: string = '';
  sessionId: string;
  notifier = new Subject();

  constructor(
    private router: Router,
    private _routes: ActivatedRoute
  ) {}

  ngOnInit(): void{
    // console.log(this._routes.data)
    // this._routes.snapshot.data['test'].data$
    //   .pipe(takeUntil(this.notifier))
    //   .subscribe((el: any) => {
    //     console.log(el)
    //   this.key = el
    //     this.router.navigate(['/confirmationKey'],
    //       { queryParams: { key : this.key }
    //       });
    // })

    setTimeout(()=>{
      this.sessionId = this._routes.snapshot.queryParams['key'];
      this.firstKey = this.sessionId.split('').splice(0,3);
      this.secondKey = this.sessionId.split('').splice(3,6);
    },100)
  }

  ngOnDestroy() {
    this.notifier.next();
    this.notifier.complete();
  }
}
