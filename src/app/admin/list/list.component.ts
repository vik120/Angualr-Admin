import { Component, OnInit } from '@angular/core';
import { galleryService } from '../../services/gallery.service';
import { Observable } from "rxjs";
import { Gallary } from "../../models/gallary";
import { CardComponent } from '../../shared/card/card.component';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { first, take } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	p = 1;
	showLoader: Boolean = true;

	gallerylist: Observable<Gallary[]>;

  constructor(private gallery: galleryService, private ngxService: NgxUiLoaderService) { }

  ngOnInit(): void {
	  this.ngxService.start();
	  this.getGallery();
  }
  
  getGallery(){
  	this.gallery.getAllGallery().pipe(take(1)).subscribe((data:any) => {
  		this.gallerylist = data;
	//	console.log(this.gallerylist)
		this.ngxService.stop();
  	}) 
  }

}
