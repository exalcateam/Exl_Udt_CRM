import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserimageComponent } from './userimage/userimage.component';
import { CompanyimageComponent } from './companyimage/companyimage.component';
import { PersonimageComponent } from './personimage/personimage.component';
import { RouterModule, Routes } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

const routes : Routes =[
  {
    path:'userimage',
    component:UserimageComponent
  },
  {
    path:'companyimage',
    component:CompanyimageComponent
  },
  {
    path:'personimage',
    component:PersonimageComponent
  }
];

@NgModule({
  declarations: [
    UserimageComponent,
    CompanyimageComponent,
    PersonimageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatDialogModule,
    MatButtonModule
  ]
})
export class UploadimagesModule { }
