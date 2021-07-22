import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'formLogIn', loadChildren: () => import('./form/form-login/formLogInModule').then(m => m.FormLogInModule) },
  { path: 'formRegistration', loadChildren: () => import('./form/form-registration/formRegistrationModule').then(m => m.FormRegistrationModule) },
  { path: 'verification', loadChildren: () => import('./form/verification/verificationModule').then(m => m.VerificationModule) },
  // { path: '**', redirectTo: 'formLogIn' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
