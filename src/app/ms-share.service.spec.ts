import { TestBed, inject } from '@angular/core/testing';

import { MsShareService } from './ms-share.service';

describe('MsShareService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MsShareService]
    });
  });

  it('should be created', inject([MsShareService], (service: MsShareService) => {
    expect(service).toBeTruthy();
  }));
});
