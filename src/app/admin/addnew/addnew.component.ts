import { Component, OnInit } from '@angular/core';
import { RouterModule , Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first, take } from 'rxjs/operators';
import { PostService } from '../../services/post.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ToastrService } from 'ngx-toastr'; 

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})
export class AddnewComponent implements OnInit {
	
	postForm: FormGroup;
	submitted:Boolean =  false;
	error = '';
	loading = false;

  constructor( private formBuilder: FormBuilder, private postservice: PostService,  private router: Router, private ngxService: NgxUiLoaderService, private toastr: ToastrService) {
	  
  	this.postForm = this.formBuilder.group({
  		title: ['', Validators.required],
		content: ['', Validators.required],
  	})
  }
  
  get f() {
	  return this.postForm.controls;
  }

  ngOnInit(): void {
  }
  
  onSubmit(){
	  this.ngxService.start();
	  this.submitted= true;
  	  if(this.postForm.invalid){
		  
  		  return;
  	  }else{
  		  this.postservice.submitNewPost(this.postForm.value).pipe(take(1)).subscribe((data: any) => {
			  if(data.id == 101){
				  this.ngxService.stop();
			  	this.toastr.success('Successfully posted', 'Your form posted successfully');
	//			this.postForm.value = '';
				this.router.navigate(['/admin/post']);
			  }
  		  })
  	  }
  }

}
