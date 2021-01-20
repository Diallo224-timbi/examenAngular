import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostInfoComponent } from './post-info/post-info.component';
import { PostCommentsComponent } from './post-comments/post-comments.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostListComponent } from './post-list/post-list.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PostEditComponent,
    PostListComponent, 
    PostInfoComponent,
    PostCommentsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PostsModule { }
