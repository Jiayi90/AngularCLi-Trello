import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TrelloAuthService } from './trello-auth.service';

@Injectable()
export class ActionService {

  constructor(private http: HttpClient, private authService: TrelloAuthService) { }

}
