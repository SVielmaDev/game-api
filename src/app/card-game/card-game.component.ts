import { Component, Input, input, OnInit } from '@angular/core';
import { Game } from '../interfaces/game.interface'

@Component({
  selector: 'app-card-game',
  imports: [],
  template: `

    <section class="card">
      <div class="platforms">

      </div>
      <div class="cover">
        <img src="{{ gameInfo.cover }}" alt="Portada" />
      </div>
      <div class="info">
        <p><strong>{{ gameInfo.title }}</strong></p>
        <p><strong>{{ gameInfo.genre }}</strong></p>
        <p><strong>{{ gameInfo.release_year }}</strong></p>
      </div>
    </section>
  `,
  styles: `.card {
      border: 1px solid #ccc;
      border-radius: 15px;
      padding: 10px;
      width: 300px;
      font-family: Arial, sans-serif;
    }

    .platform-icons {
      display: flex;
      flex-direction: column;
      float: left;
      margin-right: 10px;
    }

    .icon {
      width: 30px;
      height: 30px;
      background-color: #ddd;
      margin: 5px 0;
      text-align: center;
      line-height: 30px;
      border-radius: 5px;
      font-size: 10px;
    }

    .cover {
      text-align: center;
      margin-bottom: 10px;
    }

    .cover img {
      max-width: 100%;
      border-radius: 10px;
    }

    .info {
      clear: both;
      padding-top: 10px;
    }`
})
export class CardGameComponent {
  @Input() gameInfo!: Game;
}