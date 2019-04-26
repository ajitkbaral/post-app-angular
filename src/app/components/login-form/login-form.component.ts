import { Component, OnInit, Input } from '@angular/core';
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
    this.authService.signIn(this.email, this.password).subscribe(res => {

      if (res.status === 200) {
        this.authService.redirectAfterLogin();
      }
    },
      err => {
        console.log(err.status);
      });
  }

  signUp(login) {
    this.email = login.email;
    this.password = login.password;
    this.authService.signUp(this.email, this.password).subscribe(res => {
      if (res.status === 'success') {
        this.router.navigate(['posts']);
      }
    },
      err => {
        console.log(err);
      });
  }

}
