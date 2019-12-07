import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimedataService {

hours = ['00', '1', '2', '3', '4' , '5', '6', '7', '8', '9', '10', '11', '12'];
minutes = ['00', '15', '30', '45'];
dayTypes = ['AM', 'PM'];


}
