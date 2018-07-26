import { Component, OnInit } from '@angular/core';
import {Chat} from "../models/chat";
import {ChatService} from "../services/chat.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-chat',
  templateUrl: './new-chat.component.html',
  styleUrls: ['./new-chat.component.css']
})
export class NewChatComponent implements OnInit {

  chat: Chat = new Chat();

  newChat() {
    this.chatService.newChat(this.chat).subscribe((res) => {
      this.router.navigateByUrl('/chat')
    });
  }
  constructor(private chatService: ChatService, private router: Router) { }

  ngOnInit() {
  }

}
