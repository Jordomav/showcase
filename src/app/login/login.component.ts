import {Component, NgZone, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
import {LocalStorageService} from "../services/local-storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authUser = {
    email: '',
    password: ''
  };

  login() {
    this.userService.login(this.authUser).subscribe((res) => {
      this.zone.run(() => {
        this.localStorage.setItem('currentUser', res.user);
      });
      this.router.navigateByUrl('/');
    });
  }

  constructor(private userService: UserService, private router: Router, private localStorage: LocalStorageService, private zone: NgZone) { }

  ngOnInit() {
  }

}
