import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap, map} from 'rxjs/internal/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import {Meetings} from 'src/app/_models/Meetings';
import { ObserveOnSubscriber } from 'rxjs/internal/operators/observeOn';
const httpOption = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})};
@Injectable({
  providedIn: 'root'
})
export class MeetlinglistService {
  baseUrl: string;
  meetingsSL: string[];
constructor(private http: HttpClient) { }
updateMeeting(meet: Meetings): Observable<Meetings> {
  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
  this.baseUrl =  environment.apiUrI + 'Meeting/UpdateMeeting/';
  return this.http.put<Meetings>(this.baseUrl, meet, httpOptions);
}
deleteMeetings(meetingid) {
  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
  this.baseUrl =  environment.apiUrI + 'Meeting/DeleteMeeting/' + meetingid;
  console.log(this.baseUrl);
  return this.http.delete(this.baseUrl, httpOptions).subscribe();
}

}
