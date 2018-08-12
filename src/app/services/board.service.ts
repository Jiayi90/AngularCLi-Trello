import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Board } from './models/board';
import { TrelloAuthService } from './trello-auth.service';
import { Card } from './models/card';
import { List } from './models/list';
import { ReplaySubject } from '../../../node_modules/rxjs/ReplaySubject';

@Injectable()
export class BoardService {

  private allBoardsRs = new ReplaySubject<Board[]>(1);

  constructor(private http: HttpClient, private authService: TrelloAuthService) { }

  public getAllBoards(): Observable<Board[]> {
    this.http.get<Board[]>(this.authService.getActionUrl('/members/me/boards')).subscribe(boards => this.allBoardsRs.next(boards));
    return this.allBoardsRs;
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

  public createBoard(name: string): Observable<any> {
    const map = new Map<string, string>();
    map.set('name', name);
    return this.http.post(this.authService.getActionUrl(`/boards`, map), null);
  }

  public deleteBoard(id: string): Observable<any> {
    return this.http.delete(this.authService.getActionUrl(`/boards/${id}`));
  }
}
