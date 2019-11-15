import { Component, OnInit } from '@angular/core';
import { MeetingService} from 'src/app/_services/meeting.service';
import {AuthService} from 'src/app/auth.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit {
model: any  = {};
  constructor(private meetser: MeetingService, public authService: AuthService) { }

  ngOnInit() { console.log(this.authService.decodedtoken) ; }

  addMeeting() {
this.meetser.addmeeting(this.model).subscribe(next => { },
  error => {console.log('meeting insertion failed'); });
  }
}
