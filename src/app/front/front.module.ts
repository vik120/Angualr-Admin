import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FrontRoutingModule } from './front.routing'


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
	FrontRoutingModule
  ]
})
export class FrontModule { }
