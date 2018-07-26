import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from "../services/local-storage.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private localStorage: LocalStorageService) { }

  get user(): any {
    return this.localStorage.getItem('currentUser')
  };

  ngOnInit() {
  }

}
