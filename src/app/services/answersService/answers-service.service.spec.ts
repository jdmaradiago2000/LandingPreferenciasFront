import { TestBed, inject } from '@angular/core/testing';

import { AnswersServiceService } from './answers-service.service';

describe('AnswersServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnswersServiceService]
    });
  });

  it('should be created', inject([AnswersServiceService], (service: AnswersServiceService) => {
    expect(service).toBeTruthy();
  }));
});
