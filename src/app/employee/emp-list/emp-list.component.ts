import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  cdate=new Date()
  employees:any=[]
 searchKey:any=""

  constructor(private api:ApiService, private toastr:ToastrService){}

  ngOnInit(){
    console.log("hello")
    this.api.getAllEmployee().subscribe({
      next:(res:any)=>{
        this.getData(res)
      },
      error:(err:any)=>{
console.log(err)
      }
    })
  }
getData(data:any){
this.employees=data
console.log(this.employees)
}


deleteEmp(id:any){
  this.api.deleteEmployee(id).subscribe({
    next:(res:any)=>{
      this.toastr.success("delete employee successfully")
      this.ngOnInit()
    },
      error:(err:any)=>{
        console.log(err)
        this.toastr.error("deletion failed")
      }

  })
}

sortId(){
  this.employees.sort((a:any,b:any)=>a.id-b.id)
}


sortUsername(){
  this.employees.sort((a:any,b:any)=>a.username.localeCompare(b.username))
}

exportToPdf(){
  const body=this.employees.map((item:any)=>Object.values(item))
  console.log(body)

  const doc=new jsPDF()
  autoTable(doc,{
    head:[['ID','Username','Email','Status']],
    body:body
  })
  doc.save('employee-table-pdf')
}


}
