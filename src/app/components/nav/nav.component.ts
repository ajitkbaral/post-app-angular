import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router, Event, NavigationEnd } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() title;
  searchedText: string;
  searchBox = false;

  constructor(private dataService: DataService, private router: Router, private authService: AuthenticationService) { }

  ngOnInit() {
    this.router.events.subscribe(
      (event: Event) =>
        event instanceof NavigationEnd && this.displaySearchBar(event.url)
    );
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  isLoggedOut(): boolean {
    return !this.authService.isLoggedIn();
  }

  logOut() {
    this.authService.logout().subscribe(res => {
      this.authService.redirectToLoginPage();
    });
  }

  search() {
    this.dataService.changeSearchedText(this.searchedText);
  }

  displaySearchBar(url: string) {
    console.log(url);
    if (url === '/posts') {
      this.searchBox = true;
    } else {
      this.searchBox = false;
    }
  }

}
