import { TestBed } from '@angular/core/testing';

import { MyPathService } from './my-path.service';

describe('MyPathService', () => {
  let service: MyPathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyPathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
