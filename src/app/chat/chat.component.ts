import { Component, OnInit } from '@angular/core';
// import * as io from "socket.io-client";
import {ChatService} from "../services/chat.service";


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  // socket = io('http://localhost:3000');

  constructor(private chatService: ChatService) { }

  getChats(){
    this.chatService.getChats().subscribe((res) => {
      console.log(res);
    });
  }

  ngOnInit() {
    this.getChats();
  }

}
