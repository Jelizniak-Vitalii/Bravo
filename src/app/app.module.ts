import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  HttpClientModule } from "@angular/common/http";
import { ConfirmationKeyComponent } from "./auth/confirmationKey/confirmationKey.component";
import { SharedModule } from "./shared/module/sharedModule";
import { MainComponent } from './main/main.component';
import {MenuModule} from "./menu/menuModule";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import * as fromReducer from './store/reducer'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import {MatCheckboxModule} from "@angular/material/checkbox";



@NgModule({
  declarations: [
    AppComponent,
    ConfirmationKeyComponent,
    MainComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        SharedModule,
        MenuModule,
        NoopAnimationsModule,
        StoreModule.forRoot({state: fromReducer.reducer}),
        StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
        StoreRouterConnectingModule.forRoot(),
        MatCheckboxModule,
    ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
