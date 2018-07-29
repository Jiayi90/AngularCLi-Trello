import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TRELLO_TOKEN_KEY, API_KEY } from '../app.constants';
import { PlatformLocation } from '@angular/common';

import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from '../../../node_modules/rxjs/Observable';

@Injectable()
export class TrelloAuthService {

  private readonly prefix = 'https://api.trello.com/1';

  private loggedIn: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private router: Router, private platformLocation: PlatformLocation) {
    if (this.getToken()) {
      this.loggedIn.next(true);
    }
  }

  getToken(): string | undefined {
    return localStorage.getItem(TRELLO_TOKEN_KEY);
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn;
  }

  login() {
    window.location.href = this.assembleUrl();
  }

  assembleUrl(): string {
    const returnUrl = encodeURI((this.platformLocation as any).location.origin + '/set-token');
    // tslint:disable-next-line:max-line-length
    return `https://trello.com/1/authorize?response_type=token&key=${API_KEY}&return_url=${returnUrl}&callback_method=fragment&scope=read%2Cwrite%2Caccount&expiration=never&name=Calendar+for+Trello`;
  }

  async logout(): Promise<void> {
    localStorage.removeItem(TRELLO_TOKEN_KEY);
    this.loggedIn.next(false);
    await this.router.navigate(['/login']);
  }

  setToken(token: string): void {
    localStorage.setItem(TRELLO_TOKEN_KEY, token);
    this.loggedIn.next(true);
  }

  public getActionUrl(url: string): string {
    return `${this.prefix}${url}?key=${API_KEY}&token=${this.getToken()}`;
  }

}
