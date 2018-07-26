import { Injectable } from '@angular/core';
import {Chat} from "../models/chat";
import {HttpClient} from "@angular/common/http";
import {LocalStorageService} from "./local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class ChatService {


  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient, private localStorage: LocalStorageService) { }

  newChat(chat: Chat) {
    let req = {user_id: this.localStorage.getItem('currentUser')._id, name: chat.name};
    return this.http.post(`${this.apiUrl}/newChat`, req);
  }

  getChats() {
    return this.http.get(`${this.apiUrl}/getChats/${this.localStorage.getItem('currentUser')._id}`)
  }
}
