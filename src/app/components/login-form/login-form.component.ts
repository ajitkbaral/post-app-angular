import { Component, OnInit } from '@angular/core';
import { AngularTokenService } from 'angular-token';
import { TokenService } from 'src/app/services/token/token.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  email: string ="example@gmail.com";
  password: string = "admin123";

  // constructor(private tokenService: AngularTokenService) { }
  constructor(private tokenService: TokenService) { }

  ngOnInit() {
  }

  login() {
  //   this.tokenService.signIn({
  //     email:    'example@gmail.com',
  //     password: 'admin123'
  //   }).subscribe(
  //     res =>      console.log(res),
  //     error =>    console.log(error)
  // );

  this.tokenService.signIn(this.email, this.password).subscribe(d => {
    console.log(d);
  });

  
  }

}
