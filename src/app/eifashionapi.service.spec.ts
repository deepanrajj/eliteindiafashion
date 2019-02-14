import { TestBed } from '@angular/core/testing';

import { EifashionapiService } from './eifashionapi.service';

describe('EifashionapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EifashionapiService = TestBed.get(EifashionapiService);
    expect(service).toBeTruthy();
  });
});
