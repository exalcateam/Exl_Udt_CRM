import { Component } from '@angular/core';
import { ToolbarService } from './Services/toolbar.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  b:any;
  c:any;
  title = 'CustomerRelationship';
  hidetoolbar:boolean=false;
  datetime=new Date();
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
          if(res.url.includes('') || res.url.includes('admin') || res.url.includes('login') || (res.url.includes('forgot'))){
            this.hidetoolbar = false;
          }
          else{
            this.hidetoolbar = true;
          }
        }
      }
    })
    this.b=localStorage.getItem('data');
  this.c=(JSON.parse(this.b))




  this._activatedRoute.events.subscribe({
    next:(response) => {
      if(response instanceof NavigationEnd)
      {
        if(response.urlAfterRedirects.includes('login') || response.url.includes('forgot') || response.url.includes('newcompanydetails')
            || response.url.includes('newpersondetails') || response.url.includes('newuser'))
            {
              this.hidetoolbar = false
            }
            else{
              this.hidetoolbar = true
            }
      }
    }
  })
  }
}
