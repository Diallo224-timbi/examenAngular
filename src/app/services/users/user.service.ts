import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { User } from 'src/app/model/user';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _refresh$ = new Subject();
  get refresh(): any {
    return this._refresh$;
  }
  linkJSP="https://jsonplaceholder.typicode.com/users";
  
  constructor(private httpRequete: HttpClient) { }
  getAllUsers(): Observable<User[]>{
   return this.httpRequete.get<User[]>(this.linkJSP);
  }
  getOneUsers(id: number): Observable<any>{
    return this.httpRequete.get(`${this.linkJSP}/${id}`);
  }
  addUsers(utilisateur: any): Observable<any>{
    return this.httpRequete.post(this.linkJSP,utilisateur);
  }
  deleteOneUsers(id: number): Observable<any>{
    return this.httpRequete.delete(`${this.linkJSP}/${id}`);
  }
  updateUser(id:number,user: any): Observable<any> {
    return this.httpRequete.put(`${this.linkJSP}/${id}`, user);
  }
  getOneUsersPost(id: number): Observable<any>{
    return this.httpRequete.get(`${this.linkJSP}/${id}/posts`);
  }
}

