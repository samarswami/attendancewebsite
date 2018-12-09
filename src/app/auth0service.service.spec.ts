import { TestBed } from '@angular/core/testing';

import { Auth0serviceService } from './auth0service.service';

describe('Auth0serviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Auth0serviceService = TestBed.get(Auth0serviceService);
    expect(service).toBeTruthy();
  });
});
