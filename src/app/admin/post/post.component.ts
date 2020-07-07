import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Post, Comment } from '../../models/post';
import { Observable } from "rxjs";
import { first, take } from 'rxjs/operators';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {
	
	allPost: Observable<Post[]>;
	p = 1;
	searchpost: String = '';

	
  constructor(private postservice: PostService, private ngxService: NgxUiLoaderService) { }

  ngOnInit(): void {
	  this.ngxService.start();
	  this.getPost();
  }
  
  getPost(){
  	this.postservice.getAllPost().pipe(take(1)).subscribe((data: any) => {
  		this.allPost = data;
		this.ngxService.stop();
  	})
  }

}
