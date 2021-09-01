import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConfirmationKeyComponent} from "./auth/confirmationKey/confirmationKey.component";

const routes: Routes = [
  { path: 'formLogIn', loadChildren: () => import('./auth/formLogin/formLogInModule').then(m => m.FormLogInModule) },
  { path: 'formRegistration', loadChildren: () => import('./auth/formRegistration/formRegistrationModule').then(m => m.FormRegistrationModule) },
  { path: 'verification', loadChildren: () => import('./auth/verification/verificationModule').then(m => m.VerificationModule) },
  { path: 'main', loadChildren: () => import('./main/mainModule').then(m => m.MenuModule) },
  { path: 'confirmationKey', component: ConfirmationKeyComponent },
  { path: '**', redirectTo: 'formLogIn' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
