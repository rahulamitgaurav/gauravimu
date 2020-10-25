import { TestBed } from '@angular/core/testing';

import { TestlogicService } from './testlogic.service';

describe('TestlogicService', () => {
  let service: TestlogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestlogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
