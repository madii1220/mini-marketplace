import { HeaderComponent } from './components/header/header';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <app-header></app-header>

    <main class="container">
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent {}
