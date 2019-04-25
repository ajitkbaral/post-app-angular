import { Component, OnInit } from '@angular/core';
import { AngularTokenService } from 'angular-token';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private tokenService: AngularTokenService) { }

  ngOnInit() {
  }

  signUp() {
    this.tokenService.registerAccount({
        login:                'example@example.org',
        password:             'secretPassword',
        passwordConfirmation: 'secretPassword'
      }).subscribe(
        res =>      console.log(res),
        error =>    console.log(error)
    );
  }
}
