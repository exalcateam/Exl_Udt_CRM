import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginCredService } from 'src/app/Services/login-cred.service';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.scss']
})
export class NewuserComponent {

  newuser:FormGroup
  Roles:string[]=['Admin','User']
  userRole:any

  constructor(private _userBuilder:FormBuilder,private _userlogin:LoginCredService,private _router:Router)
  {
    this.newuser = this._userBuilder.group({
      Username:['',[Validators.required,Validators.pattern("[a-zA-Z].{8,10}")]],
      Password:['',[Validators.required,Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}")]],
      Role:['',Validators.required]
    })
  }


  createuser()
  {
    console.log("Create User : ",this.newuser.value)
    return this._userlogin.adduser(this.newuser.value)
    .subscribe({
      next:(data) => {
        this._router.navigate(['/authentication/login'])
      },error(err) {
        console.log(err)
      },
    })
  }

}
