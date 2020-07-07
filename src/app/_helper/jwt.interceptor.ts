import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { baseUrl } from '../../environments/environment';
import { SecurityService } from '../services/security.service'


@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor( private security: SecurityService ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
	
	  const user = this.security.userValue;
	  const isLoggedIn = user && user.token;
	  
	  const isApiUrl = request.url.startsWith(baseUrl);
	  
	  if(isLoggedIn && isApiUrl){
	  	
		request = request.clone({
			setHeaders: {
				Authorization: `Bearer ${user.token}`
			}
		})
		
	  }
	
    return next.handle(request);
  }
}
