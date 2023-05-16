import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginCredService } from 'src/app/Services/login-cred.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent {

  changePasswordGroup:FormGroup
  data:any
  Username:any

  constructor(private _fb:FormBuilder,private _storage:LoginCredService)
  {
    this.changePasswordGroup = _fb.group({
      Username:'',
      OldPassword:'',
      NewPassword:''
    })

    this.data = localStorage.getItem('UserData')
    this.Username = JSON.parse(this.data)

  }


  changepassword(changepassword:any)
  {
    if(this.Username.username == this.changePasswordGroup.value.Username)
    {
      if(changepassword == this.changePasswordGroup.value.NewPassword)
      {
        this._storage.changepassword(this.changePasswordGroup.value)
        .subscribe({
        next: (data) => {
            console.log("Password Updated Successfully")
          },error(err) {
            console.log("Password Not upadated")
          }
        })
      }
      else
        console.log("Password Not match")
  }
  else
    console.log("Username Not Match")
}

}
