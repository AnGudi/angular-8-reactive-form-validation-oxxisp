import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  isLoggedin = false;

  constructor() {}

  ngOnInit() {}
  // Logout() {
  //   this.authService.logout();
  // }

  isLoggedIn() {
    if (JSON.parse(localStorage.getItem('currentUser')).auth_token == null) {
      this.isLoggedin = false;
      return this.isLoggedin;
    } else {
      return true;
    }
  }
}
