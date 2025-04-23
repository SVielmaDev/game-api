import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../interfaces/game.interface';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private apiUrl = "http://localhost:3000/api/games"

  constructor(private http: HttpClient) {}

  getGamesList(): Observable<Game>{
    return this.http.get<Game>(this.apiUrl);
  }
}
