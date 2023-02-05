import { TestBed } from '@angular/core/testing';

import { UdService } from './ud.service';

describe('UdService', () => {
  let service: UdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
