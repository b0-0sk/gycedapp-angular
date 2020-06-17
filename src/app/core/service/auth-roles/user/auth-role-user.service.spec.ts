import { TestBed } from '@angular/core/testing';

import { AuthRoleUserService } from './auth-role-user.service';

describe('AuthRoleUserService', () => {
  let service: AuthRoleUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthRoleUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
