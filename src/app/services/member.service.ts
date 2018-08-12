import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TrelloAuthService } from './trello-auth.service';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { Member } from './models/member';
import { Action } from './models/action';

@Injectable()
export class MemberService {

  constructor(private http: HttpClient, private authService: TrelloAuthService) { }

  getMember(): Observable<Member> {
    return this.http.get<Member>(this.authService.getActionUrl('/members/me'));
  }

  getActions(): Observable<Action[]> {
    return this.http.get<Action[]>(this.authService.getActionUrl('/members/me/actions'));
  }
}
