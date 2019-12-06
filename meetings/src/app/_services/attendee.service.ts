import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap, map} from 'rxjs/internal/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import {Meetings} from 'src/app/_models/Meetings';
import { ObserveOnSubscriber } from 'rxjs/internal/operators/observeOn';
import { Attendee } from '../_models/Attendee';

const httpOption = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class AttendeeService {

constructor(private http: HttpClient) { }
baseUrl: string;
allAttendee: string[];
nameid: any;
jwt = new JwtHelperService();

addAttendee(data): Observable<any>{
  this.baseUrl = environment.apiUrI + 'Attendee/add/';
  return this.http.post(this.baseUrl, data, httpOption).pipe(
    map((response: any) => { this.getAllAttendees(); console.log('meeting added'); }));
}


getAllAttendees(): Observable<Attendee[]> {
  const token = localStorage.getItem('token');
  this.nameid = this.jwt.decodeToken(token).nameid;
  this.baseUrl = environment.apiUrI + 'Attendee/GetAttendeeByUserID/' + this.nameid;
  return this.http.get<Attendee[]>(this.baseUrl, httpOption);
}
}

