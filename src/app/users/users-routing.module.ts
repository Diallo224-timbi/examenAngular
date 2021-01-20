import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserPostsComponent } from './user-posts/user-posts.component';

const routes: Routes = [
  {
    path: '' , component: UserListComponent
  },
  {
    path: 'addUser' , component: UserEditComponent
  },
  {
    path: 'editUser/:id' , component: UserEditComponent
  },
  {
    path: ':id/posts' , component: UserPostsComponent
  },
  {
    path: 'listUser' , component: UserListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
