import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { RouterModule } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
model: any  = {};
Username: string;
nameid: number;
jwt = new JwtHelperService();
  constructor(public authService: AuthService) { }

  ngOnInit() {
  }


  login() {
  this.authService.login(this.model).subscribe(next => { },
 error => {console.log('Failed login'); });

  }

  loggedin() {
    const token = localStorage.getItem('token');
    if (token) {
    this.Username = this.jwt.decodeToken(token).unique_name;
    this.nameid = this.jwt.decodeToken(token).nameid;
    }
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    console.log('Logged out');
  }
}
