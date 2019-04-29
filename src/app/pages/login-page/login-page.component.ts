import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.authService.redirectAfterLogin();
    }
  }

  signIn(form) {
    this.authService.signIn(form.email, form.password).subscribe(res => {

      if (res.status === 200) {
        this.authService.redirectAfterLogin();
      }
    },
      err => {
        console.log(err.status);
      });

  }

}
