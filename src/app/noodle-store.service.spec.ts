import { TestBed } from '@angular/core/testing';

import { NoodleStoreService } from './noodle-store.service';

describe('NoodleStoreService', () => {
  let service: NoodleStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoodleStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
