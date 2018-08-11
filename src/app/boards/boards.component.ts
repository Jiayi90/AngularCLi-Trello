import { Component, OnInit } from '@angular/core';
import { BoardService } from '../services/board.service';
import { Board } from '../services/models/board';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {

  public boards: Board[];
  constructor(private boardService: BoardService) {}


  ngOnInit() {
    this.boardService.getAllBoards().subscribe(boards => this.boards = boards);
  }

}
