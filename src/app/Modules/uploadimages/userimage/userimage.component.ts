import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { LoginCredService } from 'src/app/Services/login-cred.service';

@Component({
  selector: 'app-userimage',
  templateUrl: './userimage.component.html',
  styleUrls: ['./userimage.component.scss']
})
export class UserimageComponent {

  updateimage:any
  userdetails:any
  imagename: any;
  ImageURL: any;
  selecetdfile: any;

  constructor(public dialog:MatDialogRef<UserimageComponent>,private _storage:LoginCredService,private sanitizer:DomSanitizer)
  {
    this.userdetails = _storage.getuser()

    this.getimage()

  }

  selectimage(event:any)
  {
    this.updateimage = event.target.files[0]
  }

  imageupdate()
  {
    const formdata = new FormData()
    formdata.append(this.updateimage.name,this.updateimage,this.updateimage.name);
    formdata.append("username",this.userdetails.username);
    console.log("Form Data : ",formdata)
    this._storage.addimage(formdata)
    .subscribe({
      next: (data) =>
      {
      this.getimage()

      // this._storage.sendrefresh()

      console.log("Image Uploaded Successfully",data)
        this.dialog.close();
      }
      ,error(err) {
        console.log("Image Uploaded Error",err)
      }
    })
  }

  cancel()
  {
    this.dialog.close()
  }


  getimage()
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
