import { Component, OnInit } from '@angular/core';


import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
  providers: []
})
export class SignUpComponent implements OnInit {
  
  signUpForm : FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router, 
  ) {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required, Validators.minLength(3)],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required, Validators.minLength(6)],
      confirmPassword: ['']
    });
   }

  ngOnInit(): void {
  }

  onSubmit() {
    
  }






  

}
