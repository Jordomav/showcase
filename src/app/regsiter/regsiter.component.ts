import { Component, OnInit } from '@angular/core';
import { User } from "../models/user";
import { RegsiterService } from '../services/regsiter.service';

@Component({
  selector: 'app-regsiter',
  templateUrl: './regsiter.component.html',
  styleUrls: ['./regsiter.component.css']
})
export class RegsiterComponent implements OnInit {

  user: User = new User();

  register() {
    this.registerService.register(this.user);
  };

  constructor(private registerService: RegsiterService) { }

  ngOnInit() {
  }

}
