import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from './app.component';
import { BoardsComponent } from './boards/boards.component';
import { BoardService } from './services/board.service';
import { BoardComponent } from './board/board.component';
import { AppRoutingModule } from './app.routes';
import { TrelloAuthService } from './services/trello-auth.service';
import { SetTokenComponent } from './set-token/set-token.component';
import { PublicGuard } from './public.guard';
import { PrivateGuard } from './private.guard';
import { LoginComponent } from './login/login.component';
import { MemberService } from './services/member.service';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CardService } from './services/card.service';
import { CreateBoardComponent } from './create-board/create-board.component';
import { FormsModule } from '@angular/forms';
import { ListService } from './services/list.service';
import { CreateListComponent } from './create-list/create-list.component';
import { ActionsComponent } from './actions/actions.component';
import { ActionService } from './services/action.service';


@NgModule({
  declarations: [ // Declaration von Components, die innerhalb des Modules genutzt werden
    AppComponent,
    BoardsComponent,
    BoardComponent,
    SetTokenComponent,
    LoginComponent,
    ToolbarComponent,
    CreateBoardComponent,
    CreateListComponent,
    ActionsComponent
  ],
  imports: [
    AppRoutingModule, // Übernimmt das Routing
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule, // Für Animationen, wird für Materials benötigt
    HttpClientModule, // Für Rest Calls
    MatCardModule, // Materials Cars
    MatMenuModule, // Materials Navigation
    MatIconModule, // Materials Icons
    MatToolbarModule, // Materials Toolbar
    MatButtonModule,
    MatTabsModule,
    MatListModule,
    MatDialogModule,
    MatInputModule,
  ],
  providers: [ // Für Depenency Injection
    BoardService,
    TrelloAuthService,
    MemberService,
    CardService,
    PrivateGuard,
    PublicGuard,
    ListService,
    ActionService,
  ],
  entryComponents: [
    CreateBoardComponent,
    CreateListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
