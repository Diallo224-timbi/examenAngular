import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/model/comment';
import { Post } from 'src/app/model/post';
import { User } from 'src/app/model/user';
import { PosteService } from 'src/app/services/poster/poste.service';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  form!: FormGroup;
  users: User[] = [];
  posts: Post[]=[];
  button: string = 'ADD';
  constructor( private formBuilder: FormBuilder , private userService: UserService , private postService: PosteService , private routeActivated: ActivatedRoute ) { }
  comments?: Comment[];
  ngOnInit(): void {
    this.formInit();
    this.getUsers();
    const id: string| null = this.routeActivated.snapshot.paramMap.get('id');
      
    if ( id != null) {
      this.getPost(parseInt(id));
    
      this.button = 'EDIT';

      this.postService.getOnePostComment(parseInt(id)).subscribe(
        data=> {
          this.comments=data;
           console.log(data
            )}
        ,
        err=> console.log(err)
      )
      
      
    }

  }

  getPost(id: number){
    this.postService.getOnePost(id).subscribe(
      (data: Post) => {
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
      title: new FormControl( '' , [Validators.required , Validators.minLength(5)]),
      body: new FormControl('' , [Validators.required , Validators.minLength(20)]),
      userId: new FormControl(Number , [Validators.required , Validators.min(1)])
    })
  }

  formInitEdit(post: Post){
    this.form.patchValue({
      id: post.id,
      title: post.title,
      body: post.body,
      userId: post.userId
    })
  }
  save():void {
    if (this.form.valid) {
      const post: Post = this.form.value;
      if(post.id ==0){
        
        this.postService.addPost(post).subscribe(
          (data) =>{
            alert("Ajout effectuée");
            console.log(data)
          },
          (err)=> console.log("euureur su modifie"+err)
        )
      }else{
        
        this.postService.updatePost(post.id ,post).subscribe(
          data => {
            console.log("data " + data);
            alert("Modification post effectuée");
          },
          err=> {
            console.log("data " + err);
          }
        );
      }
    }
  }
  getUsers(){
    this.userService.getAllUsers().subscribe(
      (datas) => {
        this.users = datas;
        console.log(this.users);
      },
      (err) => console.log(err)
    );
  }

}
