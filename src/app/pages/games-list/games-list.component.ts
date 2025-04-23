import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Observable } from 'rxjs';
import { Game } from '../../interfaces/game.interface'
import { AsyncPipe } from '@angular/common';
import { CardGameComponent } from '../../card-game/card-game.component';

@Component({
  selector: 'app-games-list',
  imports: [AsyncPipe, CardGameComponent],
  template: `
    @if(gameResults$ | async; as resultObject){
    <ul>
      @for(game of resultObject.; track game.id){
        <li>
          <app-card-game />
        </li>
      }

    </ul>
    }
  `,
  styles: ``
})
export class GamesListComponent implements OnInit {
  public gameResults$!: Observable <Game>
  constructor(private service: GameService){}

  ngOnInit(): void {
    this.gameResults$ = this.service.getGamesList();
  }
}
