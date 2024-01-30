import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HomeComponent } from './home/home.component';


@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  <main>
    <header class="brand-name">
    </header>
    <section class="content">
      <app-home></app-home>
    </section>
  </main>
`,
  imports: [RouterOutlet, 
    HomeComponent]
  ,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'homes';
}
