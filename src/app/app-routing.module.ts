import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjoutPostComponent } from './ajout-post/ajout-post.component';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PosterComponent } from './poster/poster.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'poster', component: PosterComponent},
  {path:'commenter', component: CommentaireComponent},
  {path:'utilisateur', component: UserComponent},
  {path:'posteEdit/:id', component: EditPostComponent},
  {path:'addpost', component: AjoutPostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
