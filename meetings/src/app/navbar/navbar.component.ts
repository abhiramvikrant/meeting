import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
model: any  = {};
Username: string;
  constructor(public authService: AuthService) { }

  ngOnInit() {
  }


  login() {
  this.authService.login(this.model).subscribe(next => { },
 error => {console.log('Failed login'); });

  }

  loggedin() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    console.log('Logged out');
  }
}
