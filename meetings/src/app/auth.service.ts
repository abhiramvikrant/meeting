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
export class AuthService {
  private url = environment.apiUrI + 'Authenticate/Login';

constructor(private http: HttpClient) { }
decodedtoken: any ;
jwtHelper = new JwtHelperService();

login(data): Observable<any> {
return this.http.post(this.url, data, httpOption).pipe(
  map((response: any) => {
  const user = response;
  console.log(response);
  if (user) {
  localStorage.setItem('token', user.token);
  localStorage.setItem('user', JSON.stringify(user.user));
  this.decodedtoken = this.jwtHelper.decodeToken(user.token);

  console.log(this.decodedtoken.nameid);
}
  }
)); }
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
      return of(result as T);
  };
}

private save_token(data) {
  if ( data.success) {
    localStorage.setItem('token', data.token);
    console.log('inside set token');
    return;
  }
}



}
