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

  constructor(private _fbuilder: FormBuilder, private _router: Router, private _logincreds: LoginCredService, private _toolBar: ToolbarService) {
    //login Credential Form Group Definition
    this.loginCredential = this._fbuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
    this._toolBar.hidetoolbar(false);
  }

  userlogin() {
    this._logincreds.authentication(this.loginCredential.value)
      .subscribe({

        next: (logs) => {
          this._router.navigate(['/authentication/dashboard'])
        }, error: (err) => {
          alert('Invalid Username')
        }
      })
  }


}
