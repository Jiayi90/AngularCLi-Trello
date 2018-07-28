import { Component, OnInit } from '@angular/core';
import { TrelloAuthService } from '../services/trello-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-token',
  templateUrl: './set-token.component.html',
  styleUrls: ['./set-token.component.css']
})
export class SetTokenComponent implements OnInit {

  constructor(private authService: TrelloAuthService,
              private router: Router) {
    const hash = window.location.hash;
    const token = hash.split('=')[1];
    if (token) {
      this.authService.setToken(token);
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {  }

}
