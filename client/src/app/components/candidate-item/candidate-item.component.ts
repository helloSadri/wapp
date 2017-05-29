import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-candidate-item',
	templateUrl: './candidate-item.component.html',
	styleUrls: ['./candidate-item.component.css'],
	inputs: ['candidate']
})

export class CandidateItemComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

}