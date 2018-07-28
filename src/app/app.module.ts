import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BoardsComponent } from './boards/boards.component';
import { BoardService } from './services/board.service';
import { BoardComponent } from './board/board.component';
import { AppRoutingModule } from './app.routes';
import { TrelloAuthService } from './services/trello-auth.service';
import { SetTokenComponent } from './set-token/set-token.component';
import { PublicGuard } from './public.guard';
import { PrivateGuard } from './private.guard';


@NgModule({
  declarations: [ // Declaration von Components, die innerhalb des Modules genutzt werden
    AppComponent,
    BoardsComponent,
    BoardComponent,
    SetTokenComponent
  ],
  imports: [
    AppRoutingModule, // Übernimmt das Routing
    BrowserModule,
    BrowserAnimationsModule, // Für Animationen, wird für Materials benötigt
    HttpClientModule, // Für Rest Calls
    MatCardModule // Materials Cars
  ],
  providers: [ // Für Depenency Injection
    BoardService,
    TrelloAuthService,
    PrivateGuard,
    PublicGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
