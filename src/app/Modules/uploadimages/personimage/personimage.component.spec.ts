import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonimageComponent } from './personimage.component';

describe('PersonimageComponent', () => {
  let component: PersonimageComponent;
  let fixture: ComponentFixture<PersonimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonimageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
