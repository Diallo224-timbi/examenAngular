import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PosteService } from '../services/poster/poste.service';

@Component({
  selector: 'app-ajout-post',
  templateUrl: './ajout-post.component.html',
  styleUrls: ['./ajout-post.component.css']
})
export class AjoutPostComponent implements OnInit {

  constructor(private posterService: PosteService) { }

  ngOnInit(): void {
  
  }
  ajouter(formulaire: NgForm){
    this.posterService.addPost(formulaire.value).subscribe(
      data =>{
        alert("ajout effectué")
      },
      error=>{
        alert("erreur sur ajout")
      }
    )
    console.log(formulaire.value)
  }

}
