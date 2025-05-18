import { TestBed } from '@angular/core/testing';

import { ProjectbaseService } from './projectbase.service';

describe('ProjectbaseService', () => {
  let service: ProjectbaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectbaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
