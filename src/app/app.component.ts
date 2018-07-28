import { Component, OnInit } from '@angular/core';
import { TrelloAuthService } from './services/trello-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Trello';

  constructor() { }

  ngOnInit() { }
}
