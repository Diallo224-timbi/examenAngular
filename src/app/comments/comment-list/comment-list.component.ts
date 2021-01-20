import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { CommentaireService } from 'src/app/services/commentaires/commentaire.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  dtOptions: DataTables.Settings= {};
  dtTrigger: Subject<any> = new Subject();

  @ViewChild(DataTableDirective) dtElement: DataTableDirective |any;
  comments: any;
  constructor(private commentService: CommentaireService) { }

  ngOnInit(): void {
    this.commentService.refresh.subscribe(
      ()=>{
        this.chargerTable();
      }
    )
    this.dtOptions={
      pagingType: 'full_numbers',
      pageLength: 5,
      autoWidth: true,//autosize colum
      order: [[0, 'desc']],
      lengthMenu:[3,5,10]
    };
    
    this.chargerTable();

    //=================================================
  }
  chargerTable(){
    this.commentService.getAllCommentaires().subscribe(
      donnee=>{
        this.comments=donnee;
        this.dtTrigger.next();
        
        console.log(donnee);
      },
      erreur=>{
        console.log(erreur);
      }
    );
  }
  delete(id: number){
    this.commentService.deleteOneCommentaires(id).subscribe(
      donnee=>{
        alert("Supprimer avec succès");
        console.log(donnee);
      },
      erreur=>{
        alert("Erreur sur supprimer");
        console.log(erreur);
      }
    );

  }

}
