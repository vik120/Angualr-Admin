import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './general/login/login.component';
import { RegisterComponent } from './general/register/register.component';
import { AdminComponent } from './admin/admin.component';
import {FrontComponent} from './front/front/front.component';

import { AuthGuard } from './general/auth.guard';
import { Roles } from './models';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'front',
		pathMatch: 'full',
	},
	{
		path: 'front',
		component: FrontComponent,
		children: [
			{
				path: '',
				loadChildren: './front/front.module#FrontModule',
			}
		]
	},
	{
		path: 'login',
		component: LoginComponent 
	},
	{
		path: 'register',
		component: RegisterComponent
	},
	{
		path: 'admin',
		component: AdminComponent,
		canActivate: [AuthGuard],
		data: {roles: [Roles.Admin]},
		children: [
			{
				 path: '',
				loadChildren: './admin/admin.module#AdminModule',
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
