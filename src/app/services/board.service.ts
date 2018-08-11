import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Board } from './models/board';
import { TrelloAuthService } from './trello-auth.service';
import { Card } from './models/card';
import { List } from './models/list';

@Injectable()
export class BoardService {

  constructor(private http: HttpClient, private authService: TrelloAuthService) { }

  public getAllBoards(): Observable<Board[]> {
    return this.http.get<Board[]>(this.authService.getActionUrl('/members/me/boards'));
  }

  public getBoard(id: string): Observable<Board> {
    return this.http.get<Board>(this.authService.getActionUrl(`/boards/${id}`));
  }

  public getBoardCards(id: string): Observable<Card[]> {
    return this.http.get<Card[]>(this.authService.getActionUrl(`/boards/${id}/cards`));
  }

  public getBoardLists(id: string): Observable<List[]> {
    return this.http.get<List[]>(this.authService.getActionUrl(`/boards/${id}/lists`));
  }
}
