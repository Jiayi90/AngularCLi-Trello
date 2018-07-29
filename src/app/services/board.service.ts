import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Board } from './board';
import { TrelloAuthService } from './trello-auth.service';

@Injectable()
export class BoardService {

  constructor(private http: HttpClient, private authService: TrelloAuthService) { }

  public getAllBoards(): Observable<Board[]> {
    return this.http.get<Board[]>(this.authService.getActionUrl('/members/me/boards'));
  }

  public getBoard(id: string): Observable<Board> {
    return this.http.get<Board>(this.authService.getActionUrl(`/boards/${id}`));
  }

  public getBoardCards(id: string): Observable<any> {
    return this.http.get<Board>(this.authService.getActionUrl(`/boards/${id}/cards`));
  }

  public getBoardLists(id: string): Observable<any> {
    return this.http.get<Board>(this.authService.getActionUrl(`/boards/${id}/lists`));
  }
}
