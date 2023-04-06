import { TestBed } from '@angular/core/testing';

import { LoginCredService } from './login-cred.service';

describe('LoginCredService', () => {
  let service: LoginCredService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginCredService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
