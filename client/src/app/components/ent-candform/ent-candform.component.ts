import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ent-candform',
  templateUrl: './ent-candform.component.html',
  styleUrls: ['./ent-candform.component.css']
})

export class EntCandformComponent implements OnInit {



  complexForm: FormGroup;

  constructor(fb: FormBuilder) {

    this.complexForm = fb.group({
      'lastName': '',
      'firstName': '',
      'php': false,
      'ruby': false,
      'javascript': false,
      'python': false,
      'symfony': false,
      'node': false,
      'django': false,
      'rails': false
    })
  }

  submitForm(value: any):void{
    console.log('Reactive Form Data: ')
    console.log(value);
  }

  ngOnInit() {
  }

}