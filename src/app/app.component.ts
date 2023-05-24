import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ToolbarService } from './Services/toolbar.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UserimageComponent } from './Modules/uploadimages/userimage/userimage.component';
import { LoginCredService } from './Services/login-cred.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  // b:any;
  // c:any;
  title = 'CustomerRelationship';
  hidetoolbar:boolean=false;
  datetime=new Date();
  imagename:any
  file:any = {}
  ImageURL:any
  userdetails:any


  constructor(private _sub: ToolbarService, private _activatedRoute: Router,
    private dialog:MatDialog,private _storage:LoginCredService,
    private sanitizer:DomSanitizer) {
    
  }

  ngOnInit() 
  {
    // this._sub.hide.subscribe((hide) => {
    //   console.log("Hide : ", this.hidetoolbar)
    //   this.hidetoolbar = hide;
    //   console.log("Hide : ", this.hidetoolbar)
    // });
  

    this._storage.Refreshmodule.subscribe(d => {
      this.userdetails = d
      console.log("Subject User Details : ",this.userdetails)
      this.getimage()
    })

    if(this.userdetails == null)
    {
      // this.b=localStorage.getItem('UserData');
      // this.c=(JSON.parse(this.b))
      // console.log("C : ",this.c)
      this.userdetails = this._storage.getuser()
    }

    this.getimage()


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
    


    this._activatedRoute.events.subscribe({
      next:(response) => {
        if(response instanceof NavigationEnd)
        {
          if(response.urlAfterRedirects.includes('login') || response.url.includes('forgot') || response.url.includes('newcompanydetails')
              || response.url.includes('newpersondetails') || response.url.includes('newuser') || (response.url.includes('changepassword')))
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
  

  ngOnChanges(changes: SimpleChanges)
  {
    this.getimage()
    console.log("Ng OnChanges Working")




  }


  openuserdialog()
  {
    this.dialog.open(UserimageComponent)
  }


  getimage()
  {
    console.log("Get Image C : ",this.userdetails)
    if(this.userdetails != null)
    {
      this._storage.getuserimage(this.userdetails.username)
    .subscribe({
      next: async (data) => {
        this.imagename = data.result.filename
        const BASE64 = await this._storage.createBlob(
          data.result.filename,
          data.result.filecontent,
          data.result.filetype
        );
        const BLOB = this._storage.dataURItoBlob(BASE64);
        let file = new File([BLOB],data.result.filename);
        const Imageurl = URL.createObjectURL(file);
        this.ImageURL = this.sanitizer.bypassSecurityTrustResourceUrl(Imageurl);
      },error(err) {
        console.log("Error : ",err)
      },
    })
    }
  }


}
