import { Injectable } from '@angular/core';
import { Department } from './departments';
import { Employees } from './employee';
//Import the Employee

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
    //employee_return:Employees;

  constructor() {
    emp1:Employees;
   }
  employeeList: Employees[] = [
    {
      id: 1,
      name: "Sonia",
      salary: 700000,
      permanent: true,
      department:new Department(1,'cse'),
      skills: [{id:1, name:"Java"}, {id:2, name:"Spring"}, {id:3, name:"JavaScript"}],
      today: new Date("1998-07-18")
    },
    {
      id: 2,
      name: "Sarah",
      salary: 23100,
      permanent: true,
      department:new Department(1,'cse'),
      skills: [{id:1, name:"Java"}, {id:2, name:"Spring"}, {id:3, name:"JavaScript"}],
      today: new Date("1998-12-13")
    },
    {
      id: 3,
      name: "Moon",
      salary: 44000,
      permanent: true,
      department:new Department(1,'cse'),
      skills: [{id:1, name:"Java"}, {id:2, name:"Spring"}, {id:3, name:"JavaScript"}],
      today: new Date("1993-07-08")
    },
    {
      id: 4,
      name: "Sonu",
      salary: 40000,
      permanent: true,
      department:new Department(1,'cse'),
      skills: [{id:1, name:"Java"}, {id:2, name:"Spring"}, {id:3, name:"JavaScript"}],
      today: new Date("1997-01-11")
    },
    {
      id: 5,
      name: "Sun",
      salary: 16750,
      permanent: true,
      department:new Department(1,'cse'),
      skills: [{id:1, name:"Java"}, {id:2, name:"Spring"}, {id:3, name:"JavaScript"}],
      today: new Date("1994-12-31")
    }];

    //create a method called getAllEmployees in this service class
    getAllEmployees(): Employees[]{
      return this.employeeList;
    }
    //Return employee based on its employeeId
    employee_return:Employees=this.employeeList[0];
    getEmployee(employeeId: number): Employees{
      for(let emp of this.employeeList){
        if(emp.id === employeeId){
          this.employee_return = emp;
        }
      }
      return this.employee_return;
    }
}