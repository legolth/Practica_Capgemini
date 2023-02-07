import { TestBed } from '@angular/core/testing';

import { ServiSimulatedService } from './servi-simulated.service';

describe('ServiSimulatedService', () => {
  let service: ServiSimulatedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiSimulatedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
