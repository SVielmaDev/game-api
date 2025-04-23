import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardGameComponent } from './card-game/card-game.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardGameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-19-app';
}
