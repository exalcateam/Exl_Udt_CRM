import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginCredService } from 'src/app/Services/login-cred.service';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.scss']
})
export class CreateaccountComponent {



  createLoginCredential:FormGroup
  Roles:any = ['Admin','User']
  selectedfile:any


  constructor(private _createBuilder:FormBuilder,private _storage:LoginCredService,private _router:Router)
  {
    this.createLoginCredential=this._createBuilder.group({
      username:['',[Validators.required,Validators.pattern('^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$')]],
      password:['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}')]],
      role:''
    })
  }

  selectimage(event:any)
  {
    this.selectedfile = event.target.files[0];
    console.log("Event : ",event)
    console.log("Selected File : ",this.selectedfile)
  }


  createaccount()
  {
    console.log(this.createLoginCredential.value)
    const formdata = new FormData()
    formdata.append(this.selectedfile.name,this.selectedfile,this.selectedfile.name);
    formdata.append("username",this.createLoginCredential.value.username);
    console.log("Form Data : ",formdata)

    this._storage.adduser(this.createLoginCredential.value)
    .subscribe({
      next: (data) => {
        console.log("Account Created Successfully")
        this._router.navigate(['/homepages/dashboard'])
      },error(err) {
        console.log("Account Not Created")
      },
    })


    this._storage.addimage(formdata)
    .subscribe({
      next(value) {
        console.log("Image Uploded Succesfully")
      },error(err) {
        console.log("Image not Uploded")
      },
    })
    
  }

}
