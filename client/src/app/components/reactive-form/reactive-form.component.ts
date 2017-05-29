import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})

export class ReactiveFormComponent implements OnInit {
  form: FormGroup;
  formErrors = {
    name: '',
    firstname: '',
    addresses: [
      { city: '', country: '' }
    ]
  };
  validationMessages = {
    name: {
      required: 'Un nom est requis',
      minlength: 'Le nom doit contenir au moins 3 caractères',
      maxlength: 'Le nom doit contenir au plus 6 caractères'
    },
    firstname: {
      required: 'Un prénom est requis',
      minlength: 'Le prénom doit contenir au moins 3 caractères'
    },
    addresses: {
      city: {
        required: 'Une Ville est requises',
        minlength: 'le nom de la ville doit contenir au moins 3 caractères'
      },
      country: {
        required: 'Une pay est requises',
        minlength: 'le nom de du pay doit contenir au moins 3 caractères'
      }
    }
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.buildForm();
  }


  buildForm() {
    this.form = this.fb.group({
      name: ['', [Validators.minLength(3), Validators.maxLength(6)]],
      firstname: ['', Validators.minLength(3)],
      addresses: this.fb.array([
        this.createAddress()
      ])
    });
    console.log(this.form);

  
    this.form.valueChanges.subscribe(data => this.validateForm());
  }


  validateForm() {
    for (let field in this.formErrors) {
      this.formErrors[field] = '';



      let input = this.form.get(field);

      if (input.invalid && input.dirty) {

        for (let error in input.errors) {

          this.formErrors[field] = this.validationMessages[field][error];
        }
      }
    }

    this.validateAddresses();
  }



  validateAddresses() {

    let addresses = <FormArray>this.form.get('addresses');


    this.formErrors.addresses = [];

    let n = 1;
    while (n <= addresses.length) {

      this.formErrors.addresses.push({ city: '', country: '' });


      let address = <FormGroup>addresses.at(n - 1);


      for (let field in address.controls) {
        let input = address.get(field);


        if (input.invalid && input.dirty) {
          for (let error in input.errors) {
            this.formErrors.addresses[n - 1][field] = this.validationMessages.addresses[field][error];

          }
        }
      }

      n++;

    }
  }

  createAddress() {
    return this.fb.group({
      city: ['', Validators.minLength(3)],
      country: ['']
    });
  }

  addAddress() {
    let addresses = <FormArray>this.form.get('addresses');
    addresses.push(this.fb.group({
      city: [''],
      country: ['']
    }));
  }

  removeAddress(i) {
    let addresses = <FormArray>this.form.get('addresses');
    addresses.removeAt(i);
  }

  processForm() {
    console.log('processing', this.form.value);
  }

}
