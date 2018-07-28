import { Component, OnInit } from '@angular/core';
import { BoardService } from '../services/board.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { Board } from '../services/board';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  private board: Board;
  constructor(private route: ActivatedRoute,
              private boardService: BoardService) {
    this.getBoard().subscribe(board => this.board = board);
    this.getCards().subscribe();
    this.getLists().subscribe();
  }

  ngOnInit() {
  }

  private getBoard(): Observable<Board> {
    return this.getBoardId().flatMap(id => this.boardService.getBoard(id));
  }

  private getCards(): Observable<any> {
    return this.getBoardId().flatMap(id => this.boardService.getBoardCards(id));
  }

  private getLists(): Observable<any> {
    return this.getBoardId().flatMap(id => this.boardService.getBoardLists(id));
  }

  private getBoardId(): Observable<string> {
    return this.route.params.map(params => params['id']);
  }

}
