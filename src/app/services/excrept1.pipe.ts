import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'excrept'
})
export class Excrept1Pipe implements PipeTransform {

  transform(text: String, length: any): any {
	  if(!text|| !length){
		  return text;
	  }
	  
	  if(text.length > length){
	  	return text.substr(0, length) +'...'
	  }
	  
	  return text
  }

}
