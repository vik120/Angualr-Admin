import { Component, OnInit } from '@angular/core';
import { RouterModule , Router, ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Comment, SinglePost } from '../../models/post';
import { Observable } from "rxjs";
import { first, take } from 'rxjs/operators';

@Component({
  selector: 'app-singlepost',
  templateUrl: './singlepost.component.html',
  styleUrls: ['./singlepost.component.css']
})
export class SinglepostComponent implements OnInit {
	postid = this.activeroute.snapshot.params['id'];
	postdata: any;
	commentList: Observable<Comment>
	
	
  constructor(private route: Router, private activeroute: ActivatedRoute, private postservice: PostService, private ngxService: NgxUiLoaderService) { }
	
	
  ngOnInit(): void {
	  this.ngxService.start();
	  this.getPost();
	  
  }
  
  getPost(){
  	this.postservice.getSinglePost(this.postid).subscribe((data: any) => {
  		this.postdata = data;
		
	//	this.keys = Object.values(this.postdata);
		
		console.log(this.postdata);
		
		this.postservice.getPostCommet(this.postid).pipe(take(1)).subscribe((commentdata: any) => {
			 
				this.commentList = commentdata;	
				this.ngxService.stop();
			 
		})
  	})
  }

}
