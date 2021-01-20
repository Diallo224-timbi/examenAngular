import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostCommentsComponent } from './post-comments/post-comments.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [
  {
    path: '' , component: PostListComponent
  },
  {
    path: 'addPost' , component: PostEditComponent
  },
  {
    path: 'editPost/:id' , component: PostEditComponent
  },
  {
    path: ':id/comments', component: PostCommentsComponent
  },
  {
    path: 'listPost', component: PostListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
