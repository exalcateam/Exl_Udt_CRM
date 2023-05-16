import { Component } from '@angular/core';
import { LoginCredService } from 'src/app/Services/login-cred.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  hideCreateDelete:boolean

  constructor(private _storage:LoginCredService)
  {
    this.hideCreateDelete = _storage.getUserRole()
  }
 
}
