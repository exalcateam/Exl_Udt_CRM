import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginCredService } from 'src/app/Services/login-cred.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent {


  forgotpasswordGroup:FormGroup

  constructor(private _forgot:FormBuilder,private _storage:LoginCredService,private _router:Router)
  {
    this.forgotpasswordGroup = _forgot.group({
      Username:'',
      Password:'',
      Role:'role'
    })
  }

  forgotpassword(password:any)
  {
    if(this.forgotpasswordGroup.value.Password == password)
    {
      this._storage.forgotpassword(this.forgotpasswordGroup.value)
      .subscribe({
        next: (data) => {
          console.log("Password Change Successfully")
          this._router.navigate(['/authentication/login'])
        },error(err) {
          console.log(err)
        },
      })
    }
    else
    {
      console.log("Re-Enter Password not Correct")
    }
  }


}
