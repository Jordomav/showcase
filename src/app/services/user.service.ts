import { Injectable } from '@angular/core';
import { LocalStorageService } from "./local-storage.service";
import {User} from "../models/user";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Res} from "../models/response";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;

  private apiUrl = 'http://localhost:3000';

  login(authUser) {
    console.log(authUser);
    return this.http.post<Res>(`${this.apiUrl}/userLogin`, authUser);
  }

  getUser(){
    this.user = this.localStorage.getItem('currentUser');
  }

  constructor(private http: HttpClient, private localStorage: LocalStorageService) { }
}
