import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  rForm: FormGroup;
  email: string;
  password: string;

  emailAlert = 'Email field is invalid';

  @Input() page = 'login';

  @Output() formSubmit = new EventEmitter();


  constructor(private authService: AuthenticationService, private router: Router, private fb: FormBuilder) {
    this.rForm = fb.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, [Validators.required, Validators.minLength(8)]]
    });

  }

  ngOnInit() {
  }

  signIn(login) {
    this.email = login.email;
    this.password = login.password;

    const form = {
      email: this.email,
      password: this.password
    };

    this.formSubmit.emit(form);
  }

  signUp(login) {
    this.email = login.email;
    this.password = login.password;

    const form = {
      email: this.email,
      password: this.password
    };

    this.formSubmit.emit(form);
  }

}
