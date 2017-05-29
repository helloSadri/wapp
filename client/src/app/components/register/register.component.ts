import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service'
import { AuthService } from '../../services/auth.service'
import { FlashMessagesService } from 'ngx-flash-messages';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name : String;
  username : String;
  email : String;
  password : String;

  constructor(private validateService:ValidateService, 
    private flashMessagesService: FlashMessagesService,
    private authService: AuthService,
    private router: Router 
    ) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }

    
    if (!this.validateService.validateRegister(user)){
      this.flashMessagesService.show('Please fill in all fields', {
        classes: ['alert', 'alert-warning'], timeout: 1000,});
      console.log('Please fill in all fields');
      return false;
    }

    
    if (!this.validateService.validateEmail(user.email)){
      this.flashMessagesService.show('Please use a validate email', {
        classes: ['alert', 'alert-warning'],timeout: 1000,});
      return false;
    }

    
    this.authService.registerUser(user).subscribe(data => {
      if(data.success){
        this.flashMessagesService.show('Your are now registered and can log in', {
          classes: ['alert', 'alert-success'], timeout: 1000,});
        this.router.navigate(['/login']);
      } else {
        this.flashMessagesService.show('Somthing went wrong', {
          classes: ['alert', 'alert-danger'], timeout: 1000, });
        this.router.navigate(['/register']);
      }
    });

  }
}
