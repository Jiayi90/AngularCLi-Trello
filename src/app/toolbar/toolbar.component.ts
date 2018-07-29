import { Component, OnInit } from '@angular/core';
import { MemberService } from '../services/member.service';
import { Router } from '@angular/router';
import { TrelloAuthService } from '../services/trello-auth.service';
import { Observable } from '../../../node_modules/rxjs/Observable';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  public initials: string;
  public loggedIn: boolean;

  constructor(private authService: TrelloAuthService,
              private memberService: MemberService,
              private router: Router) {
      this.authService.isLoggedIn().subscribe(b => {
        this.loggedIn = b;
        this.memberInitials().subscribe(initials => this.initials = initials);
      });
    }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

  navigateBoards() {
    this.router.navigate(['/']);
  }

  memberInitials(): Observable<string> {
    return this.memberService.getMember().map(member => member.initials);
  }
}
