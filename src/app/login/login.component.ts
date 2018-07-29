import { Component, OnInit } from '@angular/core';
import { TrelloAuthService } from '../services/trello-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private trelloAuthService: TrelloAuthService) { }

  ngOnInit() {
  }

  navigateTrelloLogin() {
    this.trelloAuthService.login();
  }

}
