import { TestBed } from '@angular/core/testing';

import { NumeroCompartilhadoService } from './numero-compartilhado.service';

describe('NumeroCompartilhadoService', () => {
  let service: NumeroCompartilhadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumeroCompartilhadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
