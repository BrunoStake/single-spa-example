import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {v4 as uuidv4} from 'uuid';


@Component({
  selector: 'app-super',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  user = ''

  users: string[] = []

  addUser() {
    
    this.users.push(uuidv4() + " - " + this.user)

    window.dispatchEvent(new CustomEvent("@stake/super/add/user",{
      detail: {
        id: uuidv4(),
        name: this.user
      }
    }))
  }
}
