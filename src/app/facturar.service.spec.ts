import { TestBed } from '@angular/core/testing';

import { FacturarService } from './facturar.service';

describe('FacturarService', () => {
  let service: FacturarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacturarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
