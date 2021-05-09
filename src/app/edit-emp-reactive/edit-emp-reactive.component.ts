import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employees } from './employee';
import { Skills } from "../view-emp/skills";
import { Department } from "./departments";
import { ActivatedRoute, RouterLink } from '@angular/router';
  import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-edit-emp-reactive',
  templateUrl: './edit-emp-reactive.component.html',
  styleUrls: ['./edit-emp-reactive.component.css']
})
export class EditEmpReactiveComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
   private employeeService:EmployeeService
  ) { }
  //department
  department: Department = {
    id: 1, name:'FSE'
  };
  //Array of Departments
  departments: Department[] = [
    {id: 1, name:'Computer Vision'},
    {id: 2, name: 'Cryptography'},
    {id: 3, name: 'Automation'}
  ];
  //Skill
  skill: Skills[] = [
    {id: 1, name:'JavaScript'},
    {id: 2, name: 'Spring Boot'},
    {id: 3, name: 'NodeJS'}
  ];
  //Employee
  employee = this.employeeService.getEmployee(2);
  empForm = new FormGroup({
      name: new FormControl(this.employee.name, [
      //write the validation logic over here
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(10)
    ]),
    salary: new FormControl(this.employee.salary, [Validators.required]),
    permanent: new FormControl(this.employee.permanent),
    department_emp: new FormControl(this.department)
  });
  //This is for the validator to retrieve the value in the form field
  get name(){
    return this.empForm.get('name');
  }
  get salary(){
    return this.empForm.get('salary');
  } 
  get permanent(){
    return this.empForm.get('permanent');
  }
  get department_emp(){
    return this.empForm.get('department_emp');
  }
  

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.empForm);
  }

}