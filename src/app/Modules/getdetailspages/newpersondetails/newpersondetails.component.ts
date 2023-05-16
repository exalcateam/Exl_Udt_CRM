import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginCredService } from 'src/app/Services/login-cred.service';

@Component({
  selector: 'app-newpersondetails',
  templateUrl: './newpersondetails.component.html',
  styleUrls: ['./newpersondetails.component.scss']
})
export class NewpersondetailsComponent {


  persondetails:FormGroup
  Title:any
  button:any 
  value:any

  constructor(private _personBuilder:FormBuilder,private _storage:LoginCredService,private _router:Router,private activate:ActivatedRoute)
  {
    this.persondetails = this._personBuilder.group({
      Name: '',
      Designation: '',
      MobileNo: '',
      Email: '',
      Photo: '',
      companyId:''
    })

    this.Title = activate.snapshot.queryParams['Title'];
    this.button = activate.snapshot.queryParams['button'];

  }


  id:any
  companyid:any

  addperson()
  {
    this.id = localStorage.getItem('personData')
    this.companyid = JSON.parse(this.id)
    console.log(this.companyid.companyId)
    this.persondetails.value.companyId = this.companyid.companyId
    console.log(this.persondetails.value)
    return this._storage.newperson(this.persondetails.value)
    .subscribe({
      next:(data) => {
        this._router.navigate(['/homepages/persondetails'])
      },
      error(err) {
        console.log(err)
      },
    })
  }

}
