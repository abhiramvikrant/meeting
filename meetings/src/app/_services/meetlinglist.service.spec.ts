/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MeetlinglistService } from './meetlinglist.service';

describe('Service: Meetlinglist', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MeetlinglistService]
    });
  });

  it('should ...', inject([MeetlinglistService], (service: MeetlinglistService) => {
    expect(service).toBeTruthy();
  }));
});
