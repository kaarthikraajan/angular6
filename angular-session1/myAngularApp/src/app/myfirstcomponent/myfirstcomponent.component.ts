import { Component, OnInit } from '@angular/core';
import { student} from './student';

@Component({
  selector: 'app-myfirstcomponent',
  templateUrl: './myfirstcomponent.component.html',
  styleUrls: ['./myfirstcomponent.component.css']
})
export class MyfirstcomponentComponent implements OnInit {

  sobj:student;

  constructor() 
  {
    this.sobj= new student("Kaarthik","kaarthik@aol.com",4434345634);
  }

  ngOnInit() {
  }

}
