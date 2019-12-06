/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MeetinglistComponent } from './meetinglist.component';

describe('MeetinglistComponent', () => {
  let component: MeetinglistComponent;
  let fixture: ComponentFixture<MeetinglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetinglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetinglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
