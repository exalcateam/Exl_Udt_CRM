import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginCredService } from 'src/app/Services/login-cred.service';

@Component({
  selector: 'app-deleteaccount',
  templateUrl: './deleteaccount.component.html',
  styleUrls: ['./deleteaccount.component.scss']
})
export class DeleteaccountComponent {

  deleteaccountGroup:FormGroup
  temp:any
  tempuser:any

  constructor(private _deleteBuilder:FormBuilder,private _storage:LoginCredService,private _router:Router)
  {
    this.deleteaccountGroup = _deleteBuilder.group({
      removeusername:'',
      username:'',
      password:''
    })
  }

  deleteaccount()
  {
    this.temp = localStorage.getItem('UserData')
    this.tempuser = JSON.parse(this.temp)
    console.log(this.deleteaccountGroup.value)
    if(this.tempuser.username == this.deleteaccountGroup.value.username && this.tempuser.password == this.deleteaccountGroup.value.password)
    {
      this._storage.deleteaccount(this.deleteaccountGroup.value.removeusername)
      .subscribe({
      next: (data) => {
        console.log("Account Remove Successfully")
        this._router.navigate(['/homepages/dashboard'])
      },error(err) {
        console.log("Account Not Removed")
      },
    })
    }
    else
    {
      console.log("Username and Password is Invalid")
    }
  }
  
}
