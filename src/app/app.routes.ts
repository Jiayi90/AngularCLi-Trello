import { RouterModule, Routes } from '@angular/router';
import { BoardsComponent } from './boards/boards.component';
import { NgModule } from '@angular/core';
import { BoardComponent } from './board/board.component';
import { SetTokenComponent } from './set-token/set-token.component';
import { PrivateGuard } from './private.guard';
import { PublicGuard } from './public.guard';
import { LoginComponent } from './login/login.component';
import { ActionsComponent } from './actions/actions.component';

const appRoutes: Routes = [
    { path: '', component: BoardsComponent, canActivate: [PrivateGuard] },
    { path: 'actions', component: ActionsComponent, canActivate: [PrivateGuard] },
    { path: 'board/:id', component: BoardComponent, canActivate: [PrivateGuard] },
    { path: 'set-token', component: SetTokenComponent, canActivate: [PublicGuard] },
    { path: 'login', component: LoginComponent, canActivate: [PublicGuard] },
  ];

  @NgModule({
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    exports: [
      RouterModule
    ],
    declarations: []
  })
  export class AppRoutingModule {

  }
