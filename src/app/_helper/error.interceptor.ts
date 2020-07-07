import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SecurityService } from '../services/security.service'

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private security: SecurityService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
	  
    return next.handle(request).pipe(catchError(err => {
		
		if([401,403].indexOf(err.status) !== -1){
			
			// auto logout if 401 unauthorized or 403 forbidden response returned from api
			this.security.logOut();	
			location.reload(true);
		}
		
		const error = err.error.message || err.statusText;
		            return throwError(error);
		
	}));
  }
}
