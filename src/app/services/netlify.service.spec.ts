import { TestBed, inject } from '@angular/core/testing';

import { NetlifyService } from './netlify.service';

describe('NetlifyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NetlifyService]
    });
  });

  it('should be created', inject([NetlifyService], (service: NetlifyService) => {
    expect(service).toBeTruthy();
  }));
});
