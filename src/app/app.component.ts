import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	templateUrl: './app.component.html'
})
export class AppComponent { 

	condition: boolean = true;

	items = [ "Tom", "Bob", "Sam", "Bill" ];

	count: number = 5;

	toggle() {
		this.condition = !this.condition;
	}
}