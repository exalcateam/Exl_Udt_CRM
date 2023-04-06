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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
