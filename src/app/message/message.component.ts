import { Component, OnInit } from '@angular/core';
import io from 'socket.io-client';
import {ActivatedRoute} from "@angular/router";
import {LocalStorageService} from "../services/local-storage.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  chatName: string;
  socket;
  messages;
  message: string;
  private apiUrl = 'https://jordomav.ngrok.io';

  addMessage(msg) {
    this.messages.push(msg);
  }

  getMessages() {
    return this.http.get(`${this.apiUrl}/getMessages/${this.chatName}`);
  }

  sendMessage() {
    this.socket.emit('chat message', {message: this.message, user: this.localStorage.getItem('currentUser').name});
    this.message = '';
    return false;
  }

  constructor(private route: ActivatedRoute, private localStorage: LocalStorageService, private http: HttpClient) {

  }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.chatName = params.name;
      this.socket = io('http://localhost:3000/' + params.name);
    });

    this.getMessages().subscribe(res => {
      this.messages = res;
    });

    this.socket.on('chat message', (msg) => {
        console.log(msg);
        this.addMessage(msg);
      })
  }

}
