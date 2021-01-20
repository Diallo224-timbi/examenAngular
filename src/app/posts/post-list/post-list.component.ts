import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { PosteService } from 'src/app/services/poster/poste.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  dtOptions: DataTables.Settings= {};
  dtTrigger: Subject<any> = new Subject();

  @ViewChild(DataTableDirective) dtElement: DataTableDirective |any;
  posters : any;
  constructor(private posterService: PosteService) { }

  ngOnInit(): void {
    this.posterService.refresh.subscribe(
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
  }
  chargerTable(){
    this.posterService.getAllPost().subscribe(
      donnee=>{
        this.posters=donnee;
        this.dtTrigger.next();
        
        console.log(donnee);
      },
      erreur=>{
        console.log(erreur);
      }
    );
  }
  delete(id: number){
    this.posterService.deleteOnePost(id).subscribe(
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
