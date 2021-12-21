import { TestBed } from '@angular/core/testing';

import { NgUiKitService } from './ng-ui-kit.service';

describe('NgUiKitService', () => {
  let service: NgUiKitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgUiKitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
