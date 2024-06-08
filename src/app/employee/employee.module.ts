import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './pipes/search.pipe';


@NgModule({
  declarations: [
    EmployeeComponent,
    EmpListComponent,
    AddEmpComponent,
    EditEmpComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class EmployeeModule { }
