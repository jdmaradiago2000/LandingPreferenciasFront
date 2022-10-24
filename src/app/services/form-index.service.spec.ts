import { TestBed, inject } from '@angular/core/testing';

import { FormIndexService } from './form-index.service';

describe('FormIndexService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormIndexService]
    });
  });

  it('should be created', inject([FormIndexService], (service: FormIndexService) => {
    expect(service).toBeTruthy();
  }));
});
