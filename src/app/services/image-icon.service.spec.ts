import { TestBed } from '@angular/core/testing';

import { ImageIconService } from './image-icon.service';

describe('ImageIconService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImageIconService = TestBed.get(ImageIconService);
    expect(service).toBeTruthy();
  });
});
