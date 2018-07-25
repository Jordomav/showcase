import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from "./services/local-storage.service";
import { User } from "./models/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private localStorage: LocalStorageService) {}

  user: User;

  ngOnInit() {
   this.user = this.localStorage.getItem('currentUser');
  }
}
