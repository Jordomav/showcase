import {Injectable, NgZone} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { Observable } from 'rxjs';

import { User } from "../models/user";
import { Res } from '../models/response';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RegsiterService {

  user: User;

  private apiUrl = 'https://jordomav.ngrok.io';

  register(newUser: User) {
    return this.http.post<Res>(`${this.apiUrl}/postUser`, newUser).subscribe((res) => {
      this.zone.run(() => {
        this.localStorage.setItem('currentUser', res.user);
      });
      this.router.navigateByUrl('/');
    });

  }

  constructor(private http: HttpClient, private localStorage: LocalStorageService, private zone: NgZone, private router: Router) { }
}
