import { Component, OnInit } from '@angular/core';
import { BoardService } from '../services/board.service';
import { Board } from '../services/models/board';
import { MatDialog } from '@angular/material/dialog';
import { CreateBoardComponent } from '../create-board/create-board.component';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {

  public boards: Board[];
  constructor(private boardService: BoardService,
              private dialog: MatDialog) {}


  ngOnInit() {
    this.boardService.getAllBoards().subscribe(boards => this.boards = boards);
  }
  createNewBoard() {
    const dialogRef = this.dialog.open(CreateBoardComponent, {
      width: '250px'
    });
  }

  deleteBoard(id) {
    this.boardService.deleteBoard(id).subscribe(() => this.boardService.getAllBoards());
  }

}
