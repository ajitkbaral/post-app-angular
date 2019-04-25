import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataService } from 'src/app/services/data.service';
import { AngularTokenService } from 'angular-token';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() title;
  searchedText: string;

  constructor(private dataService: DataService, private router: Router, private authService: AuthenticationService) { }

  ngOnInit() {
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  isLoggedOut(): boolean {
    return !this.authService.isLoggedIn();
  }

  logOut() {
    this.authService.logout();
  }

  search() {
    this.dataService.changeSearchedText(this.searchedText);
  }

}
