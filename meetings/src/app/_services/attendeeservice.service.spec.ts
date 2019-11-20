/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AttendeeserviceService } from './attendeeservice.service';

describe('Service: Attendeeservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AttendeeserviceService]
    });
  });

  it('should ...', inject([AttendeeserviceService], (service: AttendeeserviceService) => {
    expect(service).toBeTruthy();
  }));
});
