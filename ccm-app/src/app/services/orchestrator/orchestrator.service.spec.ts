import { TestBed } from '@angular/core/testing';

import { OrchestratorService } from './orchestrator.service';

describe('OrchestratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrchestratorService = TestBed.get(OrchestratorService);
    expect(service).toBeTruthy();
  });
});
