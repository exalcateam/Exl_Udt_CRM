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
    if(this.userRole.role == 'Admin')
    {
      return true;
    }
    return false;
  }


  getpf(pdf:any) : Observable<any>
  {
    return this._httpClient.get(this.url + 'LoginCred/GetFile',pdf)
  }

  deletecompany(id:any) : Observable<any>
  {
    return this._httpClient.delete(this.url + `CompanyDetails/DeleteCompany?id=${id}`)
  }

  deleteperson(id:any) : Observable<any>
  {
    return this._httpClient.delete(this.url + `CompanyDetails/DeletePerson?id=${id}`)
  }

  forgotpassword(user:LoginCredential) : Observable<any>
  {
    return this._httpClient.patch<LoginCredential>(this.url + 'LoginCred/ForgotPassword',user)
  }

  changepassword(newpassword:any) : Observable<any>
  {
    return this._httpClient.patch(this.url + 'LoginCred/ChangePassword',newpassword)
  }

  deleteaccount(delaccount:string)
  {
    return this._httpClient.delete(this.url + `LoginCred/DeleteAccount?newaccount=${delaccount}`)
  }

}
