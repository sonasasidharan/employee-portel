import { CanActivateFn } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { ToastrService } from 'ngx-toastr';
import { Inject, inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const admin=inject(AdminService)
  const router=inject(Router)
  const toastr=inject(ToastrService)
  if(admin.isLoggedIn()){
    return true;
  }
  else{
    toastr.warning("please login first")
    router.navigateByUrl('')
    return false;
  }
 
};
