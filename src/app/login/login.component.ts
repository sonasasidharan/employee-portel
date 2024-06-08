import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string=''
  password:string=''
constructor(private toastr:ToastrService,private admin:AdminService,private router:Router){}


  handleLogin=()=>{
    console.log(this.email,this.password)
    if(this.email && this.password){
      const  result=this.admin.getAdmin()
      result.subscribe({
        next:(res:any)=>{
          console.log(res)
          if(this.email==res.email && this.password==res.password){
            this.toastr.success("login successfull")
            this.email=""
            this.password=""
            sessionStorage.setItem('admin',JSON.stringify(res))
            this.router.navigateByUrl('home')

          }
          else{
            this.toastr.error("invalis email/password")
          }
        },
        error:(err)=>{
          console.log(err)
        }
      })
     
    }
    else{
      this.toastr.error("login failed/invalid username or password")
    }
  }

}
