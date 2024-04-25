import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
  <nav>
    <ul>
      <li><a routerLink="/people" routerLinkActive="active" ariaCurrentWhenActive="page">People</a></li>
      <li><a routerLink="/about" routerLinkActive="active" ariaCurrentWhenActive="page">About</a></li>
    </ul>
  </nav>

  <router-outlet/>`,
  styles: `
    :host {
      display: flex;
      height: 100vh;
      flex-flow: column;
    }
    ul {
      list-style: none;
      display: flex;
      flex-flow: row;
      justify-content: center;
      gap: 24px;
      margin: none;
      padding: 16px;
    }
    a {
      font-size: 1rem;
      text-decoration: none;
      &.active {
        font-weight: bold;
      }
    }
  `
})
export class AppComponent {
  title = 'coding-assignment';
}
