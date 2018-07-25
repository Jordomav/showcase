import {Injectable, NgZone} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { Observable } from 'rxjs';

import { User } from "../models/user";
import {UserService} from "./user.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RegsiterService {

  user: User;

  private apiUrl = 'http://localhost:3000';

  register(newUser: User) {
    return this.http.post(`${this.apiUrl}/postUser`, newUser).subscribe((res) => {
      const authUser = { email: res.user.email, password: res.user.password };
      this.zone.run(() => {
        this.localStorage.setItem('currentUser', res.user);
      });
      this.router.navigateByUrl('/');
    });

  }

  constructor(private http: HttpClient, private localStorage: LocalStorageService, private zone: NgZone, private router: Router) { }
}
