import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  page = 'signup';

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.authService.redirectAfterLogin();
    }
  }

  signUp(form) {
    this.authService.signUp(form.email, form.password).subscribe(res => {
      if (res.status === 'success') {
        this.router.navigate(['posts']);
      }
    },
      err => {
        console.log(err);
      });
  }

}
