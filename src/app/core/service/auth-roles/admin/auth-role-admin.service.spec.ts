import { TestBed } from '@angular/core/testing';

import { AuthRoleAdminService } from './auth-role-admin.service';

describe('AuthRoleAdminService', () => {
  let service: AuthRoleAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthRoleAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
