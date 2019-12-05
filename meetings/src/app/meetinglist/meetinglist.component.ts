import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MeetlinglistService} from 'src/app/_services/meetlinglist.service';
import {Meetings} from 'src/app/_models/Meetings';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap, map} from 'rxjs/internal/operators';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meetinglist',
  templateUrl: './meetinglist.component.html',
  styleUrls: ['./meetinglist.component.css']
})

export class MeetinglistComponent implements OnInit {
model: any;
jwt = new JwtHelperService();
nameid: number;
meetingsSL: string[];
baseUrl: string;
  constructor(private msl: MeetlinglistService, private http: HttpClient, private router: Router) { }


  ngOnInit() {
    const token = localStorage.getItem('token');
    this.nameid = this.jwt.decodeToken(token).nameid;
    this.getMeetingByUserId();
  }

  getMeetingByUserId() {
    this.baseUrl =  environment.apiUrI + 'Meeting/GetMeetingByUserId/' + this.nameid;
    return this.http.get(this.baseUrl).subscribe
    ((response: string[]) => {this.meetingsSL = response as string[]; console.log(this.meetingsSL); });
  }

  updateMeeting(meet: Meetings) {
  console.log('Inside edit');
  console.log(meet);
  this.msl.updateMeeting(meet); }

  deleteMeeting(meetingid) {
    if (confirm('Are you sure you want to delete the meeting?')) {
      this.msl.deleteMeetings(meetingid);
      this.router.navigate(['meetinglist']);

      }
    }

}
