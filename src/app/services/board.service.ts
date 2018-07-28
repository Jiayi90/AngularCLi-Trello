import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Board } from './board';
import { API_KEY } from '../app.constants';
import { TrelloAuthService } from './trello-auth.service';

@Injectable()
export class BoardService {

  private readonly prefix = 'https://api.trello.com/1';

  constructor(private http: HttpClient, private authService: TrelloAuthService) { }

  public getAllBoards(): Observable<Board[]> {
    return this.http.get<Board[]>(this.getActionUrl('/members/me/boards'));
  }

  public getBoard(id: string): Observable<Board> {
    return this.http.get<Board>(this.getActionUrl(`/boards/${id}`));
  }

  public getBoardCards(id: string): Observable<any> {
    return this.http.get<Board>(this.getActionUrl(`/boards/${id}/cards`));
  }

  public getBoardLists(id: string): Observable<any> {
    return this.http.get<Board>(this.getActionUrl(`/boards/${id}/lists`));
  }

  private getActionUrl(url: string): string {
    return `${this.prefix}${url}?key=${API_KEY}&token=${this.authService.getToken()}`;
  }

}
