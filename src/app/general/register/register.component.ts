import { Component, OnInit } from '@angular/core';
import { RouterModule , Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SecurityService } from '../../services/security.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	
	registerForm: FormGroup;
	submitted:Boolean = false;
	returnUrl: string;
	
	constructor(private security: SecurityService, private router: Router, private formBuilder: FormBuilder, private route: ActivatedRoute,) { 
		
		
  	  if (this.security.userValue) { 
  	              this.router.navigate(['/']);
  	          }
		
		
	}
	
	ngOnInit(): void {
		this.registerForm = this.formBuilder.group({
			name: ['', Validators.required],
		  email: ['', [Validators.required, Validators.email]],
		  password: ['', [Validators.required, Validators.minLength]]
		})
		this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
	}
	
    get f() {  
		return this.registerForm.controls; 
	}
	
    onSubmit(){
  	  this.submitted = true;
	  
  	  if(this.registerForm.invalid){
		  
  		  return;
  	  }else{
  		  console.log(this.registerForm.value);
		  this.router.navigate(['/login'])
  	   //	this.loginRedirection(this.loginform.controls.email.value, this.loginform.controls.password.value)
  	  }
    }

}
