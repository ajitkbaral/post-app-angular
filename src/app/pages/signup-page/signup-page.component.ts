import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  page = 'signup';

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.authService.redirectAfterLogin();
    }
  }

}
