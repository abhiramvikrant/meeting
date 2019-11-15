import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap, map} from 'rxjs/internal/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
const httpOption = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})};


@Injectable({
  providedIn: 'root'
})
export class MeetingService {
  baseUrl =  environment.apiUrI + 'Meeting/addmeeting';

constructor(private http: HttpClient) { }

addmeeting(data): Observable<any> {
  return this.http.post(this.baseUrl, data, httpOption).pipe(
    map((response: any) => { console.log('meeting added'); })); }}
