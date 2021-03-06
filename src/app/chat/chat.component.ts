import { Component, OnInit } from '@angular/core';
import {ChatService} from "../services/chat.service";


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  chats;

  constructor(private chatService: ChatService) { }

  getChats(){
    this.chatService.getChats().subscribe((res) => {
      this.chats = res;
    });
  }

  ngOnInit() {
    this.getChats();
  }

}
