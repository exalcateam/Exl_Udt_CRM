import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcompanydetailsComponent } from './newcompanydetails.component';

describe('NewcompanydetailsComponent', () => {
  let component: NewcompanydetailsComponent;
  let fixture: ComponentFixture<NewcompanydetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewcompanydetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewcompanydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
