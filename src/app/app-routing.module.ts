import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'authentication',
    loadChildren:() => import('./Modules/authentication/authentication.module').then(data => data.AuthenticationModule)
  },
  {
    path:'',
    redirectTo:'authentication',
    pathMatch:'full'
  },
  {
    path:'homepages',
    loadChildren:()=>import('./Modules/homepages/homepages.module').then(data=>data.HomepagesModule)
  },
  {
    path:'getdetailspages',
    loadChildren:() =>  import('./Modules/getdetailspages/getdetailspages.module').then(data => data.GetdetailspagesModule)
  },
  {
    path:'updations',
    loadChildren:() => import('./Modules/updations/updations.module').then(data => data.UpdationsModule)
  },
  {
    path:'uploadimages',
    loadChildren:() => import('./Modules/uploadimages/uploadimages.module').then(data => data.UploadimagesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
