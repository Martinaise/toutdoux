import { TestBed } from '@angular/core/testing';

import { ToutdouxlistService } from './toutdouxlist.service';

describe('ToutdouxlistService', () => {
  let service: ToutdouxlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToutdouxlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
