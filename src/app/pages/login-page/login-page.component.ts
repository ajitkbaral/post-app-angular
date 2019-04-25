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

}
