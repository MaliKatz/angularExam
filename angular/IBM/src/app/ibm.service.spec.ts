import { TestBed } from '@angular/core/testing';

import { IbmService } from './ibm.service';

describe('IbmService', () => {
  let service: IbmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IbmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
