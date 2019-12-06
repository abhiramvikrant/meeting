import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap, map} from 'rxjs/internal/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import {Meetings} from 'src/app/_models/Meetings';
import { ObserveOnSubscriber } from 'rxjs/internal/operators/observeOn';
import { Router } from '@angular/router';
const httpOption = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})};
@Injectable({
  providedIn: 'root'
})
export class MeetlinglistService {
  baseUrl: string;
  meetingsSL: string[];
constructor(private http: HttpClient, private router: Router) { }

updateMeeting(meet: Meetings) {
 window.localStorage.removeItem('meetingid');
 window.localStorage.setItem('meetingid', meet.meetingId.toString());
 this.router.navigate(['editmeeting']);
}
deleteMeetings(meetingid) {
  this.baseUrl =  environment.apiUrI + 'Meeting/DeleteMeeting/' + meetingid;
  return this.http.delete(this.baseUrl, httpOption).subscribe();
}

}
