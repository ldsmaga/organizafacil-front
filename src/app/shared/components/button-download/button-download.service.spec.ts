import { TestBed } from '@angular/core/testing';

import { ButtonDownloadService } from './button-download.service';

describe('ButtonDownloadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ButtonDownloadService = TestBed.get(ButtonDownloadService);
    expect(service).toBeTruthy();
  });
});
