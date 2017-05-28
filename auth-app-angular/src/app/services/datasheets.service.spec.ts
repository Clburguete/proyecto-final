import { TestBed, inject } from '@angular/core/testing';

import { DatasheetsService } from './datasheets.service';

describe('DatasheetsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatasheetsService]
    });
  });

  it('should be created', inject([DatasheetsService], (service: DatasheetsService) => {
    expect(service).toBeTruthy();
  }));
});
