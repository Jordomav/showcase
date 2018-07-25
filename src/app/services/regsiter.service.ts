import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { Observable } from 'rxjs';

import { User } from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class RegsiterService {

  user: User;

  private apiUrl = 'http://localhost:3000';

  register(newUser: User) {
    return this.http.post(`${this.apiUrl}/postUser`, newUser).subscribe((res) => {
      this.localStorage.setItem('currentUser', newUser);
    });

  }

  constructor(private http: HttpClient, private localStorage: LocalStorageService) { }
}
