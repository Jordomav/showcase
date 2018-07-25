import { Injectable } from '@angular/core';
import { LocalStorageService } from "./local-storage.service";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;

  getUser(){
    this.user = this.localStorage.getItem('currentUser');
  }

  constructor(private localStorage: LocalStorageService) { }
}
