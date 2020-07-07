import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../../services/security.service';
import { RouterModule , Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	
	loginform: FormGroup;
	submitted:Boolean =  false;
	returnUrl: string;
	error = '';
	loading = false;

  constructor(private security: SecurityService, private router: Router, private formBuilder: FormBuilder, private route: ActivatedRoute,) { 
	  if (this.security.userValue) { 
	              this.router.navigate(['/']);
	          }
  }

  ngOnInit(): void {
	  this.loginform = this.formBuilder.group({
		  email: ['', [Validators.required, Validators.email]],
		  password: ['', [Validators.required, Validators.minLength]]
	  })
	  
	  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  
// convenience getter for easy access to form fields
   
    get f() { 
		 
		return this.loginform.controls; 
	}
  
   
  
  onSubmit(){
	  this.submitted = true;
	   
	   
	          this.security.login(this.loginform.value.email, this.loginform.value.password)	              
	              .subscribe(
	                  data => {
						 // this.router.navigate(['/admin'])
	                      this.router.navigate([this.returnUrl]);
	                  },
	                  error => {
	                      this.error = error;
	                      this.loading = false;
	                  });
  }

}
