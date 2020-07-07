import { Injectable } from '@angular/core';
import {apiUrl} from '../../environments/environment';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from './error.service';
import { Post, Comment, SinglePost } from '../models/post';

@Injectable({
  providedIn: 'root'
})

export class PostService {
	
	httpOptions = {
	    headers: new HttpHeaders({
	      'Content-Type': 'application/json'
	    })
	  }

  constructor( private http: HttpClient, private error: ErrorService) { }
  
  getAllPost(): Observable<Post>{
  	  return this.http.get<Post>(apiUrl+'posts').pipe(
  	  	catchError(this.error.errorHandler)
  	  )
  }
  
  getSinglePost(id): Observable<SinglePost>{
  	  return this.http.get<SinglePost>(apiUrl+'posts/'+id).pipe(
  	  	catchError(this.error.errorHandler)
  	  )
  }
  
  getPostCommet(id): Observable<Comment>{
  	return this.http.get<Comment>(apiUrl+'posts/'+id+'/comments').pipe(catchError(this.error.errorHandler))
  }
  
  submitNewPost(data: Object): Observable<Object>{
	  return this.http.post(apiUrl+'posts/', data, this.httpOptions).pipe(catchError(this.error.errorHandler));
  }
  
}
