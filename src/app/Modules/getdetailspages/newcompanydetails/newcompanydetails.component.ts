import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { CompanyDetails } from 'src/app/Models/CompanyDetails';
import { CompanyFull } from 'src/app/Models/CompanyFull';
import { LoginCredService } from 'src/app/Services/login-cred.service';

@Component({
  selector: 'app-newcompanydetails',
  templateUrl: './newcompanydetails.component.html',
  styleUrls: ['./newcompanydetails.component.scss']
})
export class NewcompanydetailsComponent {


  company: FormGroup
  person: FormGroup
  localuser: CompanyFull = new CompanyFull();


  constructor(private _companyBuilder: FormBuilder, private _storage: LoginCredService) {
    this.company = this._companyBuilder.group({
      CompanyId: '',
      CompanyName: '',
      CompanyLocation: '',
      GstNo: '',
      CustomerType: '',
      Photos: ''
    })

    this.person = this._companyBuilder.group({
      personarr: this._companyBuilder.array([
        this._companyBuilder.group({
          Name: '',
          Designation: '',
          MobileNo: '',
          Email: '',
          Photo: ''
        })
      ])
    })
    
  }

  addnewperson() {
    (this.person.get('personarr') as FormArray).push(this._companyBuilder.group({
      Name: '',
      Designation: '',
      MobileNo: '',
      Email: '',
      Photo: ''
    })
    )
  }

  remove(index:number)
  {
    (this.person.get('personarr') as FormArray).removeAt(index)
  }


  getcontrols(): FormGroup[] {
    return ((this.person.get('personarr') as FormArray).controls) as FormGroup[];
  }




  addnewcompany() {
    this.localuser.newcompanydetails = this.company.value
    this.localuser.newpersondetails = this.person.value.personarr
    console.log("Local User : ",this.localuser)
    return this._storage.addcomponayandperson(this.localuser)
    .subscribe({
      next:(data) => {
        console.log("Company Details Created Successfully");
      },
      error(err) {
        console.log("Err",err);
      },
    })
  }


}
