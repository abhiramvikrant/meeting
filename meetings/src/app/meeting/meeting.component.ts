import { Component, OnInit } from '@angular/core';
import { MeetingService} from 'src/app/_services/meeting.service';
import {AuthService} from 'src/app/auth.service';
import { from } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import {MeetinglistComponent} from 'src/app/meetinglist/meetinglist.component';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { TimedataService } from '../_services/timedata.service';
@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit {
model: any  = {};
nameid: any;
meetingForm: any;
hours: string[];
minutes: string[];
dayTypes: string[];
selectedHour: string;
selectedMinute: string;
selectedDayType; string;
jwt = new JwtHelperService();
  constructor(private meetser: MeetingService, public authService: AuthService, private timedata: TimedataService) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    this.nameid = this.jwt.decodeToken(token).nameid;
    this.model.CreatedBy = this.nameid;
    this.populateData();
   }

  addMeeting() {
    this.model.StartTime = this.selectedHour + ':' + this.selectedMinute + ' ' + this.selectedDayType;
    this.meetser.addmeeting(this.model).subscribe(next => { },
     error => {console.log('meeting insertion failed'); });
  }

  populateData() {
    console.log(this.timedata.hours);
this.hours = this.timedata.hours;
this.minutes = this.timedata.minutes;
this.dayTypes = this.timedata.dayTypes;
  }
}
