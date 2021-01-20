import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentEditComponent } from './comment-edit/comment-edit.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CommentEditComponent,
    CommentListComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    
  ]
})
export class CommentsModule { }
