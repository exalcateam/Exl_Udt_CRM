import { Component } from '@angular/core';
import { ToolbarService } from './Services/toolbar.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CustomerRelationship';
  hidetoolbar:boolean=false;
  constructor(private _sub: ToolbarService, private _activatedRoute: Router) {

  }
  ngOnInit() {
    // this._sub.hide.subscribe((hide) => {
    //   console.log("Hide : ", this.hidetoolbar)
    //   this.hidetoolbar = hide;
    //   console.log("Hide : ", this.hidetoolbar)
    // });
  

    this._activatedRoute.events.subscribe({
      next:(res)=>{
        
        if(res instanceof NavigationEnd){
          if(res.url.includes('login') || (res.url.includes('forgot') || (res.url.includes('create')))){
            this.hidetoolbar = false;
          }
          else{
            this.hidetoolbar = true;
          }
        }
      }
    })
  }
}
