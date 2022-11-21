import { TestBed } from '@angular/core/testing';

import { AppMgmtService } from './app-mgmt.service';

describe('AppMgmtService', () => {
  let service: AppMgmtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppMgmtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
