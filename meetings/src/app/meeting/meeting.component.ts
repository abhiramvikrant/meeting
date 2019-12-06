import { Component, OnInit } from '@angular/core';
import { MeetingService} from 'src/app/_services/meeting.service';
import {AuthService} from 'src/app/auth.service';
import { from } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import {MeetinglistComponent} from 'src/app/meetinglist/meetinglist.component';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
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
  constructor(private meetser: MeetingService, public authService: AuthService) { }

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

  populateData(){
    this.hours = ['00', '1', '2', '3', '4' , '5', '6', '7', '8', '9', '10', '11', '12'];
    this.minutes = ['00', '15', '30', '45'];
    this.dayTypes = ['AM', 'PM']
  }
}
