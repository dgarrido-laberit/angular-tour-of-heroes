import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessagesComponent } from './components/messages/messages.component';



@NgModule({
  declarations: [
    MessagesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    // ReactiveFormsModule,
  ],
  exports: [
    FormsModule,
    MessagesComponent,
    // ReactiveFormsModule,
  ],
})
export class SharedModule { }
