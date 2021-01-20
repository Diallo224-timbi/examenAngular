import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/model/comment';
import { CommentaireService } from 'src/app/services/commentaires/commentaire.service';

@Component({
  selector: 'app-comment-edit',
  templateUrl: './comment-edit.component.html',
  styleUrls: ['./comment-edit.component.css']
})
export class CommentEditComponent implements OnInit {

  form!: FormGroup;
  comments: any;
  button: string = 'ADD';
  constructor( private formBuilder: FormBuilder , private commentService: CommentaireService , private routeActivated: ActivatedRoute ) { }

  ngOnInit(): void {
    this.formInit();
    this.getcomments();
    const id: string| null = this.routeActivated.snapshot.paramMap.get('id');
      
    if ( id != null) {
      this.getComment(parseInt(id));
    
      this.button = 'EDIT'
    }

  }

  getComment(id: number){
    this.commentService.getOneCommentaires(id).subscribe(
      (data: Comment) => {
       this.formInitEdit(data);
      },
      (err) => console.log(err)
    )
  }

  isValidInput(fieldName:string): boolean {
    return this.form.controls[fieldName].invalid &&
      (this.form.controls[fieldName].dirty || this.form.controls[fieldName].touched);
}


  formInit(){
    this.form = this.formBuilder.group({
      id: new FormControl(''),
      name: new FormControl( '' , [Validators.required , Validators.minLength(5)]),
      body: new FormControl('' , [Validators.required , Validators.minLength(20)]),
      postId: new FormControl(Number , [Validators.required , Validators.min(1)])
    })
  }

  formInitEdit(comment: Comment){
    this.form.patchValue({
      postId: comment.postId,
      id: comment.id,
      name: comment.name,
      body: comment.body,
     
    })
  }
  save():void {
    if (this.form.valid) {
      const comment: Comment = this.form.value;
      
      if(comment.id ==0 ){
        
        this.commentService.addCommentaires(comment).subscribe(
          (data) =>{
            alert("Ajout effectuée");
            console.log(data)
          },
          (err)=> console.log(err)
        )
      }else{
        
        this.commentService.updateComment(comment.id, comment).subscribe(
          (data) => {
            alert("Modification effectuée");
            console.log(data)
          },
          (err)=> console.log(err)
        )
      }
    }
  }
  getcomments(){
    this.commentService.getAllCommentaires().subscribe(
      (datas) => {
        this.comments = datas;
        console.log(this.comments);
      },
      (err) => console.log(err)
    );
  }

}
