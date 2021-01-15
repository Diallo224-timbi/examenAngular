import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  linkJSP="http://jsonplaceholder.typicode.com/users";
  constructor(private httpRequete: HttpClient) { }
  getAllUsers(): Observable<any>{
   return this.httpRequete.get(this.linkJSP);
  }
  getOneUsers(id: number): Observable<any>{
    return this.httpRequete.get(`${this.linkJSP}/${id}`);
  }
  addUsers(utilisateur: any): Observable<any>{
    return this.httpRequete.post(`${this.linkJSP}`,utilisateur);
  }
  deleteOneUsers(id: number): Observable<any>{
    return this.httpRequete.delete(`${this.linkJSP}/${id}`);
  }
  getOneUsersPost(id: number): Observable<any>{
    return this.httpRequete.get(`${this.linkJSP}/${id}/posts`);
  }
}

