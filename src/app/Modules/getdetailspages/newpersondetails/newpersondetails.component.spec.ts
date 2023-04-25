import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpersondetailsComponent } from './newpersondetails.component';

describe('NewpersondetailsComponent', () => {
  let component: NewpersondetailsComponent;
  let fixture: ComponentFixture<NewpersondetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewpersondetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewpersondetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
