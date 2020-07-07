import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';

import {AdminModule} from './admin/admin.module';
import {FrontModule} from './front/front.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { LoginComponent } from './general/login/login.component';
import { RegisterComponent } from './general/register/register.component';
import { AdminComponent } from './admin/admin.component';
import {FrontComponent} from './front/front/front.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AuthGuard } from'./general/auth.guard'
import { SecurityService } from './services/security.service';
import { ErrorService } from './services/error.service';

import { ReactiveFormsModule } from '@angular/forms';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {JwtInterceptor, ErrorInterceptor} from './_helper';

// used to create fake backend
import { fakeBackendProvider } from './_helper';
// import { CardComponent } from './shared/card/card.component';
import { NgxPaginationModule } from 'ngx-pagination';

import { NgxUiLoaderModule } from 'ngx-ui-loader';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
	  FrontComponent
//    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	  AdminModule,
	 ReactiveFormsModule,
	 HttpClientModule,
	 BrowserAnimationsModule, // required animations module
	 ToastrModule.forRoot(), // ToastrModule added,
	  NgxPaginationModule,
	  FrontModule,
	  NgxUiLoaderModule
  ],
  providers: [AuthGuard, SecurityService, fakeBackendProvider,
 	  {
 		  provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true
 	  },
 	  {
 		  provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true
 	  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
