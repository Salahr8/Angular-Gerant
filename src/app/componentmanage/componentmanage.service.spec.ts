import { TestBed } from '@angular/core/testing';

import { ComponentmanageService } from './componentmanage.service';

describe('ComponentmanageService', () => {
  let service: ComponentmanageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentmanageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  }); 
});
