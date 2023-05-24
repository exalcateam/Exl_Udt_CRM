import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginCredential } from '../Models/LoginCredential';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginCredService {


  //url:string='https://localhost:7074/api/'

  public Refreshmodule = new Subject<any>();

  constructor(private _httpClient:HttpClient) { }


  sendrefresh(data:any)
  {
    this.Refreshmodule.next(data)
  }


  authentication(logincreds:LoginCredential): Observable<LoginCredential>{
    return this._httpClient.post<LoginCredential>('Logincred/Authentication/authentication',logincreds)
  }

  adduser(newuser:any)
  {
    return this._httpClient.post('Logincred/Create',newuser)
  }

  addimage(image:any) : Observable<any>
  {
    return this._httpClient.post('Logincred/CreateImage',image)
  }

  addcomponayandperson(companydetails:any): Observable<any>{
    return this._httpClient.post('CompanyDetails/CreateCompanyandPerson',companydetails)
  }

  newperson(person:any)
  {
    return this._httpClient.post('CompanyDetails/createperson',person)
  }

  getcompany()
  {
    return this._httpClient.get('CompanyDetails/GetCompanydetails')
  }

  getperson(id:any)
  {
    return this._httpClient.get(`CompanyDetails/GetPersonDetails?id=${id}`)
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



  users:any
  userdetails:any
  getuser()
  {
    this.users = localStorage.getItem('UserData')
    this.userdetails = JSON.parse(this.users)
    return this.userdetails
  }



// Image Get Methods

  dataURItoBlob(dataURI: string): Blob {
    // convert base64/URLEncoded data component to raw binary data held in a string
    let byteString;
    if (dataURI.split(",")[0].indexOf("base64") >= 0) {
      byteString = atob(dataURI.split(",")[1]);
    } else {
      byteString = unescape(dataURI.split(",")[1]);
    }

    // separate out the mime component
    const MIMESTRING = dataURI.split(",")[0].split(":")[1].split(";")[0];
    // write the bytes of the string to a typed array
    const IA = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) {
      IA[i] = byteString.charCodeAt(i);
    }

    return new Blob([IA], { type: MIMESTRING });
  }
  
  createBlob(
    fileName: string,
    fileContent: string,
    fileExtention: string
  ): Promise<any> {
    return new Promise((resolve) => {
      const FILETYPE = fileName.toLowerCase().includes("pdf")
        ? "application/pdf"
        : fileName.toLowerCase().includes("xml")
        ? "application/xml"
        : fileName.toLowerCase().includes("csv")
        ? "text/csv"
        : fileName.toLowerCase().includes("png")
        ? "image/png"
        : "text/plain";
      const BASE64 = `data:${FILETYPE};base64,` + fileContent;
      resolve(BASE64);
    });
  }





  getpf(pdf:any) : Observable<any>
  {
    return this._httpClient.get('LoginCred/GetFile',pdf)
  }

  deletecompany(id:any) : Observable<any>
  {
    return this._httpClient.delete(`CompanyDetails/DeleteCompany?id=${id}`)
  }

  deleteperson(id:any) : Observable<any>
  {
    return this._httpClient.delete(`CompanyDetails/DeletePerson?id=${id}`)
  }

  forgotpassword(user:LoginCredential) : Observable<any>
  {
    return this._httpClient.patch<LoginCredential>('LoginCred/ForgotPassword',user)
  }

  changepassword(newpassword:any) : Observable<any>
  {
    return this._httpClient.patch('LoginCred/ChangePassword',newpassword)
  }

  deleteaccount(delaccount:string) : Observable<any>
  {
    return this._httpClient.delete(`LoginCred/DeleteAccount?username=${delaccount}`)
  }

  uploadimage(imagefile:any) : Observable<any>
  {
    return this._httpClient.post(`CompanyDetails/UploadImage`,imagefile)
  }

  getuserimage(username:string) : Observable<any>
  {
    return this._httpClient.get(`Logincred/GetImage?Id=${username}`)
  }

}
