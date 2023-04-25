import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { LoginCredService } from 'src/app/Services/login-cred.service';

@Component({
  selector: 'app-companydetails',
  templateUrl: './companydetails.component.html',
  styleUrls: ['./companydetails.component.scss']
})
export class CompanydetailsComponent {


  cols = ['companyid-col','companyname-col','location-col','gst-col','toc-col']
  datasource = new MatTableDataSource()
  datas:any
  addbutton:boolean=true

  constructor(private _storage:LoginCredService,private _route:Router)
  {
    _storage.getcompany()
    .subscribe({
      next:(data) => {
        this.datas = data
        this.datasource = new MatTableDataSource(this.datas)
      },error(err) {
        console.log("Error : ",err)
      },
    })

    this.addbutton = _storage.getUserRole()
    console.log(this.addbutton)
    
  }

  getperson(a:any)
  {
    localStorage.setItem('personData',JSON.stringify(a))
    this._route.navigate(['/homepages/persondetails'])
  }


n!:string
  CreatePdf(pdf:any)
  {
    this.n = "<h1>Santhosh M</h1>"
    console.log("PDF : ",this.n)
    this._storage.getpf(this.n)
    .subscribe({
      next: (data) => 
      {
        console.log(data)
      },
      error(err) {
        console.log(err)
      },
    })
  }


}
