import { Component, OnInit } from '@angular/core';
import {AttendeeService} from 'src/app/_services/attendee.service';
import { FormBuilder, Validators } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import {Attendee} from 'src/app/_models/Attendee';
import { AstTransformer } from '@angular/compiler/src/output/output_ast';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-attendee',
  templateUrl: './attendee.component.html',
  styleUrls: ['./attendee.component.css']
})
export class AttendeeComponent implements OnInit {
model: any = {};
nameid: any;
jwt = new JwtHelperService();
attendeesList: Observable<Attendee[]>;

constructor( public ats: AttendeeService ) {

   }

  ngOnInit() {
    const token = localStorage.getItem('token');
    this.nameid = this.jwt.decodeToken(token).nameid;
    this.model.CreatedBy = this.nameid;
    this.getAllAttendees();
    console.log(this.attendeesList);
    }
  onSubmit() {
       this.createAttendee();
  }

  createAttendee() {
  this.ats.addAttendee(this.model).subscribe(next => {this.getAllAttendees();}, error => {console.log('Attende insertion failed')});
  }
  getAllAttendees() {
   this.attendeesList =  this.ats.getAllAttendees();
    }
}
