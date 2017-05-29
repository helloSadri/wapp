import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-candidate-details',
	templateUrl: './candidate-details.component.html',
	styleUrls: ['./candidate-details.component.css'],
	inputs: ['candidate']
})

export class CandidateDetailsComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

}