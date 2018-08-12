import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BoardService } from '../services/board.service';

@Component({
  selector: 'app-create-board',
  templateUrl: './create-board.component.html',
  styleUrls: ['./create-board.component.css']
})
export class CreateBoardComponent implements OnInit {

  public newBoardName: string;

  constructor(private dialogRef: MatDialogRef<CreateBoardComponent>,
              private boardService: BoardService) { }

  ngOnInit() {
  }

  createBoard() {
    this.boardService.createBoard(this.newBoardName)
    .flatMap(() => this.boardService.getAllBoards())
    .subscribe(() => this.dialogRef.close());
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
