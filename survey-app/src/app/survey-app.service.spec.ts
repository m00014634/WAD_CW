import { TestBed } from '@angular/core/testing';

import { SurveyAppService } from './survey-app.service';

describe('SurveyAppService', () => {
  let service: SurveyAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurveyAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
