import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{
  employees: Employee[];

  ngOnInit(): void {
   this.employees=[{"id":1, "firstName":"Albina","lastName":"Lapchevska","emailId":"dfsdsf@fdd"},
   {"id":2, "firstName":"fsdsf","lastName":"Kjsasa","emailId":"ALALaf@fdd"}];
  }
}
