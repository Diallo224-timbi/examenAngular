import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {
    path: 'users', loadChildren: ()=> import('./users/users.module').then( m => m.UsersModule)
  },
  {
    path: 'posts' , loadChildren: ()=> import('./posts/posts.module').then(m => m.PostsModule)
  },
  {
    path: 'comments' , loadChildren : () => import('./comments/comments.module').then( m => m.CommentsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
