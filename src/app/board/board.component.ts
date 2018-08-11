import { Component, OnInit } from '@angular/core';
import { BoardService } from '../services/board.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Board } from '../services/models/board';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import { Card } from '../services/models/card';
import { List } from '../services/models/list';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { CardService } from '../services/card.service';
import { CardDetails } from '../services/models/card-details';
import { AttachementPreview } from '../services/models/attachement';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  public board: Board;
  public lists: List[];
  public tabCards: CardDetails[];

  private cards: Card[];

  constructor(private route: ActivatedRoute,
              private boardService: BoardService,
              private cardService: CardService) {
    this.getBoard().subscribe(board => this.board = board);
    this.getCards().subscribe(cards => this.cards = cards);
    this.getLists().subscribe(lists => this.lists = lists);
  }

  ngOnInit() {
  }

  private getBoard(): Observable<Board> {
    return this.getBoardId().flatMap(id => this.boardService.getBoard(id));
  }

  private getCards(): Observable<any> {
    return this.getBoardId().flatMap(id => this.boardService.getBoardCards(id));
  }

  private getCardDetailsByListId(listId: string): Observable<CardDetails[]> {
    return  Observable.combineLatest(this.cardsByListId(listId).map(card => this.cardService.getCardDetailsById(card.id)));
  }

  private getLists(): Observable<any> {
    return this.getBoardId().flatMap(id => this.boardService.getBoardLists(id));
  }

  private getBoardId(): Observable<string> {
    return this.route.params.map(params => params['id']);
  }

  public cardsByListId(listId: string) {
    return this.cards.filter(card => card.idList === listId);
  }

  showCardDetails(id: string) {
    this.cardService.getCardAttachmentsById(id).subscribe(console.log);
  }

  onTabChange(event: MatTabChangeEvent) {
    const {index} = event;
    const idList = this.lists[index].id;
    console.log(idList);
    this.getCardDetailsByListId(idList).subscribe(cards => this.tabCards = cards);
  }

  lastCardAttachment(card: CardDetails): AttachementPreview {
    return (card.attachments && card.attachments.length) ? card.attachments[card.attachments.length - 1].previews[3] : null;
  }

}
