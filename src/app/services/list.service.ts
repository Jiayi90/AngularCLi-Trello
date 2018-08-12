import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TrelloAuthService } from './trello-auth.service';
import { Observable } from '../../../node_modules/rxjs/Observable';

@Injectable()
export class ListService {

  constructor(private http: HttpClient, private authService: TrelloAuthService) { }

  public createList(idBoard: string, name: string): Observable<any> {
    const map = new Map<string, string>();
    map.set('idBoard', idBoard);
    map.set('name', name);
    return this.http.post(this.authService.getActionUrl(`/lists`, map), null);
  }

  public archiveList(idList: string): Observable<any> {
    const map = new Map<string, string>();
    map.set('value', 'true');
    return this.http.put(this.authService.getActionUrl(`/lists/${idList}/closed`, map), null);
  }

}
