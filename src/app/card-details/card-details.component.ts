import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

  public cardId;
  public cardName;
  public cardDesc;
  public cardDue;
  public boardId;
  public listId;

  constructor(private route: ActivatedRoute,
              private cardService: CardService) { }

  ngOnInit() {
    this.getBoardId().flatMap(id => this.cardService.getCardDetailsById(id)).subscribe(card => {
      this.cardId = card.id;
      this.cardName = card.name;
      this.cardDesc = card.desc;
      this.cardDue = card.due;
      this.boardId = card.idBoard;
      this.listId = card.idList;
    });
  }

  private getBoardId(): Observable<string> {
    return this.route.params.map(params => params['id']);
  }

  editCard() {
    this.cardService.editCard(this.cardId, this.cardName, this.cardDesc, this.cardDue).subscribe();
  }

}
