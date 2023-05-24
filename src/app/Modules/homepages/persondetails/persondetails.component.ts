import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { LoginCredService } from 'src/app/Services/login-cred.service';

@Component({
  selector: 'app-persondetails',
  templateUrl: './persondetails.component.html',
  styleUrls: ['./persondetails.component.scss']
})
export class PersondetailsComponent {

  person_col:any=[]

  datasource = new MatTableDataSource

  selecetdfile:any
  id:any
  personId:any
  persondata:any
  addbutton:boolean

  constructor(private _storage:LoginCredService,private _router:Router)
  {
    this.id = localStorage.getItem('personData')
    this.personId = JSON.parse(this.id)


    this.getpersonlist()
    
    this.addbutton = _storage.getUserRole()

    if(this.addbutton == true)
    {
      this.person_col = ['personname-col','designation-col','mobileno-col','email-col','edit-col','remove-col']
    }
    else
    {
      this.person_col = ['personname-col','designation-col','mobileno-col','email-col']
    }


  }

  getpersonlist()
  {
    this._storage.getperson(this.personId.companyId)
    .subscribe({
      next: (data) => {
        this.persondata = data
        this.datasource = new MatTableDataSource(this.persondata)
      },error(err) {
        console.log(err)
      },
    })
  }

  remove(id:any)
  {
    console.log("Id : ",id)
    this._storage.deleteperson(id.personId)
    .subscribe({
      next: (data) => {
        this.getpersonlist()
        console.log("Person Deleted Successfully")
      },error(err) {
        console.log(err)
      },
    })
  }



  update(value:any)
  {
    this._router.navigate(['/getdetailspages/newpersondetails'],{queryParams:{Title:'Update Person Details',button:'Update',val:value}});
  }



  selected(event:any)
  {
    this.selecetdfile = event.target.files[0];
    console.log("Event : ",event)
    console.log("Selected File : ",this.selecetdfile)
  }


  upload()
  {
    const formdata = new FormData()
    formdata.append(this.selecetdfile.name,this.selecetdfile,this.selecetdfile.name);
    formdata.append("Id",this.personId.companyId);
    console.log("Form Data : ",formdata)
    // this._storage.uploadimage(formdata)
    // .subscribe({
    //   next: (data) =>
    //   {
    //     console.log("Image Uploaded Successfully",data)
    //   }
    //   ,error(err) {
    //     console.log("Image Uploaded Error",err)
    //   }
    // })
  }



}
