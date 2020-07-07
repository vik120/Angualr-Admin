import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { SecurityService } from '../services/security.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	
	constructor(private router: Router, private security: SecurityService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): any {
	
		const user = this.security.userValue;
		
// if(localStorage.getItem('username') != null){
// 		return true;
// 	}else{
// 		this.routes.navigate(['/login'])
// 		return false;
// 	}

	if (user) {
		
		if(next.data.roles && next.data.roles.indexOf(user.role) === -1){
			this.router.navigate(['/']);
			
			return false;
		}
		
		return true;
	}
	
	this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } })
    
	return false;
	
  }
  
}
