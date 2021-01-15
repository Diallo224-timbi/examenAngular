import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { PosteService } from '../services/poster/poste.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
 EDITID: any;
 posterEdit: any;
  constructor(private activerRoute: ActivatedRoute, private posterService: PosteService) { }

  ngOnInit(): void {
    this.activerRoute.params.subscribe(
      (params: Params)=>{
        this.EDITID=params.id;
        this.posterService.getOnePost(+this.EDITID).subscribe(
          data =>{
            this.posterEdit = data;
            console.log(data)
          }
        )
        
      }
    )
  }
  Editer(formulaire: NgForm){
    this.posterService.updatePost(this.EDITID,formulaire.value).subscribe(
      data =>{
        alert("modification effectué")
      },
      error=>{
        alert("erreur sur modifier")
      }
    )
    console.log(formulaire.value)
  }
}
