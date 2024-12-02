import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `Hello World`,
  styles: `
    :host {
      color : blue
    }
  `
})
export class AppComponent {
  title = 'AngularPlayground';
}
