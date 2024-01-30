import { Component, NgModule } from '@angular/core';

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
  imports: [ 
    HomeComponent]
  ,
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'homes';
}
