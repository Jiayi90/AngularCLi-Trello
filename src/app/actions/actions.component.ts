import { Component, OnInit } from '@angular/core';
import { MemberService } from '../services/member.service';
import { Action } from '../services/models/action';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

  public actions: Action[];
  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.memberService.getActions().subscribe(actions => this.actions = actions);
  }

  formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleString();
  }

}
