/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TimedataService } from './timedata.service';

describe('Service: Timedata', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimedataService]
    });
  });

  it('should ...', inject([TimedataService], (service: TimedataService) => {
    expect(service).toBeTruthy();
  }));
});
