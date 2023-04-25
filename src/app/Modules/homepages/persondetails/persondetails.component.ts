import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LoginCredService } from 'src/app/Services/login-cred.service';

@Component({
  selector: 'app-persondetails',
  templateUrl: './persondetails.component.html',
  styleUrls: ['./persondetails.component.scss']
})
export class PersondetailsComponent {

  person_col = ['personname-col','designation-col','mobileno-col','email-col']

  datasource = new MatTableDataSource

  id:any
  personId:any
  persondata:any
  addbutton:boolean

  constructor(private _storage:LoginCredService)
  {
    this.id = localStorage.getItem('personData')
    this.personId = JSON.parse(this.id)


    _storage.getperson(this.personId.companyId)
    .subscribe({
      next: (data) => {
        this.persondata = data
        this.datasource = new MatTableDataSource(this.persondata)
      },error(err) {
        console.log(err)
      },
    })
    
    this.addbutton = _storage.getUserRole()

  }

}
