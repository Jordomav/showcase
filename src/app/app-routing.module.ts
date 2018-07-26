import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {ChatComponent} from "./chat/chat.component";
import {ProfileComponent} from "./profile/profile.component";
import {LoginComponent} from "./login/login.component";
import {RegsiterComponent} from "./regsiter/regsiter.component";
import {NewChatComponent} from "./new-chat/new-chat.component";
import {MessageComponent} from "./message/message.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'profile/:id', component: ProfileComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegsiterComponent},
  {path: 'new-chat', component: NewChatComponent},
  {path: 'chat/:name', component: MessageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
