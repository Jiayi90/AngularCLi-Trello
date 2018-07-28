import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TRELLO_TOKEN_KEY, API_KEY } from '../app.constants';

@Injectable()
export class TrelloAuthService {

  constructor(private router: Router) { }

  getToken(): string | undefined {
    return localStorage.getItem(TRELLO_TOKEN_KEY);
  }

  login() {
    window.location.href = this.assembleUrl();
  }

  assembleUrl(): string {
    const returnUrl = encodeURI(window.location.href + 'set-token');
    // tslint:disable-next-line:max-line-length
    return `https://trello.com/1/authorize?response_type=token&key=${API_KEY}&return_url=${returnUrl}&callback_method=fragment&scope=read%2Cwrite%2Caccount&expiration=never&name=Calendar+for+Trello`;
  }

  async logout(): Promise<void> {
    localStorage.removeItem(TRELLO_TOKEN_KEY);
    await this.router.navigate(['/']);
  }

  setToken(token: string): void {
    return localStorage.setItem(TRELLO_TOKEN_KEY, token);
  }

}
