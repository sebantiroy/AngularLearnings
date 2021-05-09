import { Component, OnInit } from '@angular/core';
import { Department } from './department';
import { Employees } from './employee';

@Component({
  selector: 'app-edit-emp-template-drive',
  templateUrl: './edit-emp-template-drive.component.html',
  styleUrls: ['./edit-emp-template-drive.component.css']
})
export class EditEmpTemplateDriveComponent implements OnInit {

  constructor() {
    departments:Department
   }

  ngOnInit(): void {
  }

   // employee:Employees[]=[{id:3,name:'John',salary:10000,permanent:false,
 // department:[{id:1,name:'payroll'}],skills:[{id:1,name:"HTML"},{id:2,name:"CSS"},{id:3,name:"Javascript"}],today:new Date('12/31/2000')
 // }]
 
  employee:Employees=
    
      new Employees(1, 'John',100000,false,new Department(1,'payroll'),[{id:1,name:"HTML"},{id:2,name:"CSS"},{id:3,name:"Javascript"}],new Date('12/31/2000'))
      departments = [

        { id: 1, name: "Payroll" },
        
        { id: 2, name: "Internal" },
        
        { id: 3, name: "HR" }
        
        ];
  
}
