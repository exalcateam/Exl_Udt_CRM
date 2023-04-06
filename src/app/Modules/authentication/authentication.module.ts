import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { CreateaccountComponent } from './createaccount/createaccount.component'

const routes:Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'forgotpassword',
    component:ForgotpasswordComponent
  },
  {
    path:'createaccount',
    component:CreateaccountComponent
  }
];

@NgModule({
  declarations: [
    LoginComponent,
    ForgotpasswordComponent,
    CreateaccountComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class AuthenticationModule { }
