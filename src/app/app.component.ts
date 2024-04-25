import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavigationComponent } from './core/components/navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NavigationComponent],
  template: `
    <app-navigation/>
    <router-outlet/>
  `,
  styles: `
    :host {
      height: 100dvh;
      
      display: flex;
      flex-flow: column;
    }
  `
})
export class AppComponent {
}
