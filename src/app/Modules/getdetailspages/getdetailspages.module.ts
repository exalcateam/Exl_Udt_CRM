import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewcompanydetailsComponent } from './newcompanydetails/newcompanydetails.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NewpersondetailsComponent } from './newpersondetails/newpersondetails.component';
import { NewuserComponent } from './newuser/newuser.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

const routes : Routes = [
  {
    path:'newcompanydetails',
    component:NewcompanydetailsComponent
  },
  {
    path:'newpersondetails',
    component:NewpersondetailsComponent
  },
  {
    path:'newuser',
    component:NewuserComponent
  }
];

@NgModule({
  declarations: [
    NewcompanydetailsComponent,
    NewpersondetailsComponent,
    NewuserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule
  ]
})
export class GetdetailspagesModule
{

}
