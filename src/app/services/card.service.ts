import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TrelloAuthService } from './trello-auth.service';
import { Observable } from 'rxjs/Observable';
import { Card } from './models/card';
import { CardDetails } from './models/card-details';
import 'rxjs/add/observable/combineLatest';
import { Attachement } from './models/attachement';

@Injectable()
export class CardService {

  constructor(private http: HttpClient, private authService: TrelloAuthService) { }

  public getCardById(id: string): Observable<Card> {
    return this.http.get<Card>(this.authService.getActionUrl(`/cards/${id}`));
  }

  public getCardAttachmentsById(id: string): Observable<Attachement[]> {
    return this.http.get<Attachement[]>(this.authService.getActionUrl(`/cards/${id}/attachments`));
  }

  public getCardDetailsById(id: string): Observable<CardDetails> {
    return Observable.combineLatest(
      this.getCardById(id),
      this.getCardAttachmentsById(id)
    ).map(res => {
      const [card, attachments] = res;
      const cardDetails: CardDetails = <CardDetails> card;
      cardDetails.attachments = attachments;
      return cardDetails;
    });
  }

  public createCard(idList: string, name: string): Observable<any> {
    const map = new Map<string, string>();
    map.set('idList', idList);
    map.set('name', name);
    return this.http.post(this.authService.getActionUrl(`/cards`, map), null);
  }

  public editCard(id: string, name: string, desc: string, due?: string) {
    const map = new Map<string, string>();
    map.set('name', name);
    map.set('desc', desc);
    if (due) {
      map.set('due', due);
    }
    return this.http.put(this.authService.getActionUrl(`/cards/${id}`, map), null);
  }

}
