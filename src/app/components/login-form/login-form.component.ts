import { Component, OnInit, Input } from '@angular/core';
import { AngularTokenService } from 'angular-token';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  email = 'example@example.org';
  password = 'secretPassword';

  @Input() page = 'login';

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  signIn() {
    this.authService.signIn(this.email, this.password).subscribe(res => {

      if (res.status === 200) {
        this.authService.redirectAfterLogin();
      }
    },
    err => {
      console.log(err);
    });

    }

  signUp() {
    this.authService.signUp(this.email, this.password).subscribe(res => {
      console.log(res);
      if (res.status === 'success') {
        this.router.navigate(['posts']);
      }
    },
    err => {
      console.log(err);
    });
  }

}
