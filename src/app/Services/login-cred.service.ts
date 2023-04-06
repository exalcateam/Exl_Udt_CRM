import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginCredential } from '../Models/LoginCredential';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginCredService {


  url:string='https://localhost:7074/api/Logincred/'

  constructor(private _httpClient:HttpClient) { }


  authentication(logincreds:LoginCredential): Observable<LoginCredential>{
    return this._httpClient.post<LoginCredential>(this.url + 'Authentication/authentication',logincreds)
  }



}
