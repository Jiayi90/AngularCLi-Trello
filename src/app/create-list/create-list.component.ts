import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css']
})
export class CreateListComponent implements OnInit {

  public newListName;

  constructor(private dialogRef: MatDialogRef<CreateListComponent>,
              private listService: ListService,
              @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

  createList() {
    this.listService.createList(this.data.id, this.newListName).subscribe(() => {
      this.dialogRef.close(true);
    });
  }


  closeDialog() {
    this.dialogRef.close(false);
  }
}
