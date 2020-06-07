import { TestBed } from '@angular/core/testing';

import { PeopleInfoService } from './items.service';

describe('PeopleInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeopleInfoService = TestBed.get(PeopleInfoService);
    expect(service).toBeTruthy();
  });
});
