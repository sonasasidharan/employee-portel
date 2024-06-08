import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';

const routes: Routes = [
  
  // localhost:4200/employee
  { path: '', component: EmpListComponent },
  // localhost:4200/employee/addemp
  { path: 'addemp', component: AddEmpComponent },
  // localhost:4200/employee/editemp
  {path:'editemp/:id',component:EditEmpComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
