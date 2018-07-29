import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import { TrelloAuthService } from './services/trello-auth.service';


@Injectable()
export class PrivateGuard implements CanActivate {


  constructor(private router: Router, private trelloAuthService: TrelloAuthService) {
  }


  /**
   * I make sure that no visitor that has NO token is able to visit '/app/**' routes.
   * */
  canActivate(): boolean {
    if (this.trelloAuthService.getToken()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
