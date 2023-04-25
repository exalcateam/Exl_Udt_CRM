import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginCredential } from '../Models/LoginCredential';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginCredService {


  url:string='https://localhost:7074/api/'

  constructor(private _httpClient:HttpClient) { }


  authentication(logincreds:LoginCredential): Observable<LoginCredential>{
    return this._httpClient.post<LoginCredential>(this.url + 'Logincred/Authentication/authentication',logincreds)
  }

  adduser(newuser:any)
  {
    return this._httpClient.post(this.url + 'Logincred/Create',newuser)
  }

  addcomponayandperson(companydetails:any): Observable<any>{
    console.log("CompanyDetails : ",companydetails)
    return this._httpClient.post(this.url + 'CompanyDetails/CreateCompanyandPerson',companydetails)
  }

  newperson(person:any)
  {
    return this._httpClient.post(this.url + 'CompanyDetails/createperson',person)
  }

  getcompany()
  {
    return this._httpClient.get(this.url + 'CompanyDetails/GetCompanydetails')
  }

  getperson(id:any)
  {
    return this._httpClient.get(this.url + `CompanyDetails/GetPersonDetails?id=${id}`)
  }

  user:any
  userRole:any

  getUserRole()
  {
    this.user = localStorage.getItem('UserData')
    this.userRole = JSON.parse(this.user)
    console.log("Service : ",this.userRole)
    console.log("Service Role : ",this.userRole.role)
    if(this.userRole.role == 'Admin')
    {
      console.log("Service Inside Role",this.userRole.role)
      return true;
    }
    return false;
  }


  getpf(pdf:any) : Observable<any>
  {
    console.log("Services : ",pdf)
    return this._httpClient.get(this.url + 'LoginCred/GetFile',pdf)
  }


}
