import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentEditComponent } from './comment-edit/comment-edit.component';
import { CommentListComponent } from './comment-list/comment-list.component';

const routes: Routes = [
  {
    path: 'listComment' , component: CommentListComponent
  },
  {
    path: 'addComment' , component: CommentEditComponent
  },
  {
    path: 'editComment/:id' , component: CommentEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule { }
