import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/model/post';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  form!: any;
  posts: Post[] = [];
  button: string = 'ADD';
  constructor( private formBuilder: FormBuilder , private userService: UserService , private routeActivated: ActivatedRoute ) { }

  ngOnInit(): void {
    this.formInit();
    //this.getUsers();
    const id: string| null = this.routeActivated.snapshot.paramMap.get('id');
      
    if ( id != null) {
      this.getPost(parseInt(id));
      this.button = 'EDIT';
      this.userService.getOneUsersPost(parseInt(id)).subscribe(
        data=> {
          this.posts=data;
           console.log(data
            )}
        ,
        err=> console.log(err)
      )
      
    }

  }

  getPost(id: number){
    this.userService.getOneUsers(id).subscribe(
      (data: User) => {
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
      username: new FormControl('' , [Validators.required , Validators.minLength(5)]),
      email: new FormControl('' , [Validators.required , Validators.minLength(10)]),
      address: new FormControl('' , [Validators.required , Validators.minLength(5)]),
      phone: new FormControl('' , [Validators.required , Validators.minLength(6)])
    })
    console.log(this.form.value);
  }

  formInitEdit(user: User){
    this.form.patchValue({
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      address: user.address.city,
      phone: user.phone
    })
  }



  save():void {
    if (this.form.valid) {
      const user: User = this.form.value;
      
      console.log('entrer')
      if(user.id == 0 ){
        console.log('create')
        this.userService.addUsers(user).subscribe(
          (data) =>{
            alert("Ajout effectuée");
            console.log(data)
          },
          (err)=> console.log(err)
        )
      }else{
        console.log('update')
        this.userService.updateUser( user.id, user).subscribe(
          (data) => {
            alert("Modification effectuée");
            console.log(data.address)
          },
          (err)=> console.log(err)
        )
      }
    }
  }
  /*getUsers(){
    this.userService.getAllUsers().subscribe(
      (datas) => {
        this.users = datas;
        console.log(this.users);
      },
      (err) => console.log(err)
    );
  }*/
}
