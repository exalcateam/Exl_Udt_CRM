import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginCredService } from 'src/app/Services/login-cred.service';
import { ToolbarService } from 'src/app/Services/toolbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  //login Credential Form Group Declaration
  loginCredential: FormGroup
  d:any
  UserData:any
  constructor(private _fbuilder: FormBuilder, private _router: Router, private _logincreds: LoginCredService, private _toolBar: ToolbarService) {
    //login Credential Form Group Definition
    this.loginCredential = this._fbuilder.group({
      username: ['',[Validators.required,Validators.pattern("[a-zA-Z].{8,10}")]],
      password: ['',[Validators.required,Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}")]],
      role:'Designation'
    });
    this._toolBar.hidetoolbar(false);
  }

  userlogin() {
    this._logincreds.authentication(this.loginCredential.value)
      .subscribe({
        next: (logs) => {
          this.UserData = logs
          localStorage.setItem('UserData',JSON.stringify(this.UserData))
          this._router.navigate(['/homepages/dashboard'])

          this._logincreds.sendrefresh(logs)

        }, error: (err) => {
          console.log(err)
        }
      })
  }


}
