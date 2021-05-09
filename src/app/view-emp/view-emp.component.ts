import { Component, OnInit } from '@angular/core';
import { Employees } from './employee';
import { Skills } from './skills';

@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.css']
})
export class ViewEmpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }title = 'Favorite Movie';
  movies = 'Lord of the Rings';
  title1="Employee Details"
  employee = [
    new Employees(1, 'John',100000,'yes',1,'payroll'),
  ];
  skills:Skills[]=[{id:1,name:"HTML"},{id:2,name:"CSS"},{id:3,name:"Javascript"}];
  today: Date = new Date('12/31/2000');

}
