import { Component } from '@angular/core';
import { LoginCredService } from 'src/app/Services/login-cred.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  hideCreateDelete:boolean
  selecetdfile:any
  id:any
  userid:any

  constructor(private _storage:LoginCredService)
  {
    this.hideCreateDelete = _storage.getUserRole()


    this.id = localStorage.getItem('UserData')
    this.userid = JSON.parse(this.id)
  }
 

  

}

