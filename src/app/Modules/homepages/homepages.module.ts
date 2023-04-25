import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CompanydetailsComponent } from './companydetails/companydetails.component';
import { MatTableModule } from '@angular/material/table';
import { PersondetailsComponent } from './persondetails/persondetails.component';


const routes:Routes=[
{
  path:'dashboard',
  component:DashboardComponent
},
{
  path:'companydetails',
  component:CompanydetailsComponent
},
{
  path:'persondetails',
  component:PersondetailsComponent
}
];

@NgModule({
  declarations: [
    DashboardComponent,
    CompanydetailsComponent,
    PersondetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule
    
  ]
})
export class HomepagesModule { }
