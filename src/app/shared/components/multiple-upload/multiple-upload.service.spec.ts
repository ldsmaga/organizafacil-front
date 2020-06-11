import { TestBed } from '@angular/core/testing';

import { MultipleUploadService } from './multiple-upload.service';

describe('MultipleUploadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MultipleUploadService = TestBed.get(MultipleUploadService);
    expect(service).toBeTruthy();
  });
});
