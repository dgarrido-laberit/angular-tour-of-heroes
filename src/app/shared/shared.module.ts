import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessagesComponent } from './components/messages/messages.component';



@NgModule({
  declarations: [
    MessagesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    FormsModule,
    MessagesComponent,
  ],
})
export class SharedModule { }
