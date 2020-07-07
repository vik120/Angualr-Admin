import { Injectable } from '@angular/core';
import {apiUrl} from '../../environments/environment';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from './error.service';
import { Gallary } from '../models/gallary';


@Injectable({
  providedIn: 'root'
})
export class galleryService {
	
	httpOptions = {
		header: new HttpHeaders({
			'Content-Type': 'application/json'
		})
	}
	
	
  
  
  constructor(
	  private http: HttpClient, private error: ErrorService
  ) { }
  
  getAllGallery(): Observable<Gallary>{
	  
	  return this.http.get<Gallary>(apiUrl+'photos').pipe(
	  	catchError(this.error.errorHandler)
	  )
  }
  
  
  
}
