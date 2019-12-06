import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap, map} from 'rxjs/internal/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { getMatAutocompleteMissingPanelError } from '@angular/material';
import {Meetings} from 'src/app/_models/Meetings';
import { MeetingList } from '../_models/MeetingList';
const httpOption = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})};


@Injectable({
  providedIn: 'root'
})
export class MeetingService {
  baseUrl =  environment.apiUrI + 'Meeting/addmeeting';
  editUrl: string;


constructor(private http: HttpClient) { }

addmeeting(data): Observable<any> {

  return this.http.post(this.baseUrl, data, httpOption).pipe(
    map((response: any) => { console.log('meeting added'); })); }

    getMeeting(meetingid): Observable<MeetingList> {
     this.editUrl = environment.apiUrI + 'Meeting/GetMeeting/' + meetingid;
     return this.http.get<MeetingList>(this.editUrl);

    }

    updateMeeting(m: Meetings):  Observable<any> {
    this.editUrl = environment.apiUrI + 'Meeting/Updatemeeting';
    return this.http.put(this.editUrl, m, httpOption)
    .pipe(map((response: any) => {console.log('meeting updated'); }));

    }
  }

