import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { PosterComponent } from './poster/poster.component';
import { UserComponent } from './user/user.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { EditPostComponent } from './edit-post/edit-post.component';
import { AjoutPostComponent } from './ajout-post/ajout-post.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CommentaireComponent,
    PosterComponent,
    UserComponent,
    MenuComponent,
    EditPostComponent,
    AjoutPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
