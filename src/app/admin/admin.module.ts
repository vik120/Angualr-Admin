import { NgModule } from '@angular/core'; 
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './admin.component'; 
import { AdminHeaderComponent } from '../shared/admin-header/admin-header.component';
import {AdminSidebarComponent } from '../shared/admin-sidebar/admin-sidebar.component';

import { ListComponent } from './list/list.component';
import { AddnewComponent } from './addnew/addnew.component'

import {galleryService} from '../services/gallery.service';
import {PostService} from '../services/post.service';

import { CardComponent } from '../shared/card/card.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// import { CardComponent } from './shared/card/card.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { PostComponent } from './post/post.component';
import { SinglepostComponent } from './singlepost/singlepost.component';
import { Excrept1Pipe } from '../services/excrept1.pipe';
import { SearchPipe } from '../filter/search.pipe';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
    imports: [
  	  CommonModule,
  	  AdminRoutingModule,
	  HttpClientModule,
		NgxPaginationModule,
		NgxUiLoaderModule,
		FormsModule,
		ReactiveFormsModule,
		ToastrModule.forRoot()
		
    ],
  	declarations: [ 
	  AdminComponent, 
	  AdminHeaderComponent,
	  AdminSidebarComponent,
		ListComponent,
		AddnewComponent,
		CardComponent,
		PostComponent,
		SinglepostComponent,
		Excrept1Pipe,
		SearchPipe
  	],
  
 	 providers: [
  	   galleryService,
		 PostService
  	]
})
export class AdminModule { }
