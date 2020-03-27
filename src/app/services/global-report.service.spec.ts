import { TestBed } from '@angular/core/testing';

import { GlobalReportService } from './global-report.service';

describe('GlobalReportService', () => {
  let service: GlobalReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
