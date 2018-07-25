import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from "./services/local-storage.service";
import { User } from "./models/user";
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private localStorage: LocalStorageService, private userService: UserService) {}

  get user(): any {
    return this.localStorage.getItem('currentUser')
  };

  logout() {
    this.userService.logout();
    this.router.navigateByUrl('/');
  }

  ngOnInit() {
  }
}
