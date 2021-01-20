import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  dtOptions: DataTables.Settings= {};
  dtTrigger: Subject<any> = new Subject();

  @ViewChild(DataTableDirective) dtElement: DataTableDirective |any;
  users : any;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
   
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
    this.userService.getAllUsers().subscribe(
      donnee=>{
        this.users=donnee;
        this.dtTrigger.next();
        
        console.log(donnee);
      },
      erreur=>{
        console.log(erreur);
      }
    );
  }
  delete(id: number){
    this.userService.deleteOneUsers(id).subscribe(
      donnee=>{
        this.chargerTable()
        console.log(donnee);
      },
      erreur=>{
        console.log(erreur);
      }
    );

  }

}
