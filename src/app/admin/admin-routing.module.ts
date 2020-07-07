import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { AdminComponent } from './admin.component'; 
import { ListComponent } from './list/list.component';
import { AddnewComponent } from './addnew/addnew.component'

import { AuthGuard } from '../general/auth.guard';
import { Roles } from '../models';
import { PostComponent } from './post/post.component';
import { SinglepostComponent } from './singlepost/singlepost.component';

const routes: Routes = [
	 
		
		{
			path: '',
			redirectTo: 'list',
			pathMatch: 'full'
		},
		
		{
			path: 'list',
			component: ListComponent,
			canActivate: [AuthGuard],
		},
		{
			path: 'post',
			component: PostComponent,
			canActivate: [AuthGuard],
			
		},
		{
			path: 'new-post',
			component: AddnewComponent,
			canActivate: [AuthGuard],
			
		},
		{
			path: 'post/:id',
			component: SinglepostComponent,
			canActivate: [AuthGuard],
			
		},
		
		{
			path: '**',
			redirectTo: '',
			pathMatch: 'full'
		},
	 
	
	
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

// export const AdminRoutingModule = RouterModule.forChild(routes);
