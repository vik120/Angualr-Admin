import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { baseUrl } from '../../environments/environment';
import { User } from '../models/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class SecurityService {
	
	private userSubject: BehaviorSubject<User>;
	public user: Observable<User>

  constructor(private http: HttpClient) { 
	  this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
	  
	  this.user = this.userSubject.asObservable();
  }
  
  public checkEmailPassword(email: string, password: string){
	  // if(email === 'saini.vik14@gmail.com' && password === '123456'){
// 		  localStorage.setItem('username', 'admin');
// 		  return true;
// 	  }else {
// 		  return false;
// 	  }
  }
  
  // public login(data):Observable<any>{
 //  	return this.http.post(`${baseUrl}/login`, data)
 //  }
 
 
 public get userValue(): User {
         return this.userSubject.value;
     }
 
 public login(email: string, password: string){
 	return this.http.post<any>(`${baseUrl}/users/authenticate`, {email, password}).pipe(
 		map(user => {
			console.log(user);
			
			localStorage.setItem('user', JSON.stringify(user));
			this.userSubject.next(user);
			
			return user;
 		})
 	)
 }
 
 public logOut(){
	 localStorage.removeItem('user');
	 this.userSubject.next(null);
 }
 
 
}
