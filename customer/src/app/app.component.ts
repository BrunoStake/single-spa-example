import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'customer';
  users: string[] = []

  ngOnInit(): void {
      window.addEventListener("@stake/super/add/user", (e: Event) => {
        const detail = (<CustomEvent>e).detail
        this.users.push(detail.id + " - " + detail.name)
      })
  }

}
