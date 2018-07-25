import { TestBed, inject } from '@angular/core/testing';

import { RegsiterService } from './regsiter.service';

describe('RegsiterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegsiterService]
    });
  });

  it('should be created', inject([RegsiterService], (service: RegsiterService) => {
    expect(service).toBeTruthy();
  }));
});
