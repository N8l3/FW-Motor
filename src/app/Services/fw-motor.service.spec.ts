import { TestBed } from '@angular/core/testing';

import { FwMotorService } from './fw-motor.service';

describe('FwMotorService', () => {
  let service: FwMotorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FwMotorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
