import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'; 

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
	
	@Input() image: String;
	@Input() title: String;
	@Input() thumbnail: String;
	

  constructor() { }

  ngOnInit(): void {
  }

}
