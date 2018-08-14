import { Component, OnInit } from '@angular/core';
import { MemberService } from '../services/member.service';
import { Action } from '../services/models/action';
import { startOfDay, isSameMonth, isSameDay } from 'date-fns';
import { CalendarEvent, CalendarEventAction } from 'angular-calendar';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

  public viewDate: Date = new Date();
  public events: CalendarEvent[];

  private activeDayIsOpen = true;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.memberService.getActions().subscribe(actions => {
      this.events = actions.map(action => this.actionToEvent(action));
    });

  }

  actionToEvent(action: Action): CalendarEvent {
    return {
      title: action.type,
      start: startOfDay(new Date(action.date))
    };
  }

  formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleString();
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
    }
  }

}
