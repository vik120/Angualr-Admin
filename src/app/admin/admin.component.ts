import { Component, OnInit } from '@angular/core';
import {AdminHeaderComponent} from '../shared/admin-header/admin-header.component';
import {AdminSidebarComponent} from '../shared/admin-sidebar/admin-sidebar.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
	  
	  // var body = document.body;
	  //
	  // body.classList.add("dark-edition");
  }
  
  ngOnDestroy(): void{
//	  body.classList.remove('dark-edition');
  }

}
