import { TestBed, inject } from '@angular/core/testing';

import { EmmitersService } from './emmiters.service';

describe('EmmitersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmmitersService]
    });
  });

  it('should be created', inject([EmmitersService], (service: EmmitersService) => {
    expect(service).toBeTruthy();
  }));
});
