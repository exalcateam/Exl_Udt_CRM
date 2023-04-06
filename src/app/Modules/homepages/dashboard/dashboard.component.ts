import { Component } from '@angular/core';
import { ToolbarService } from 'src/app/Services/toolbar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private _sub:ToolbarService){
    this._sub.hidetoolbar(true);
  }
 
}
