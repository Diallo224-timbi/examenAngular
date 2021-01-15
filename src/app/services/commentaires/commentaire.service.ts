import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  linkJSP="http://jsonplaceholder.typicode.com/comments";
  constructor(private httpRequete: HttpClient) { }
  getAllCommentaires(): Observable<any>{
   return this.httpRequete.get(this.linkJSP);
  }
  getOneCommentaires(id: number): Observable<any>{
    return this.httpRequete.get(`${this.linkJSP}/${id}`);
  }
  addCommentaires(Commentaire: any): Observable<any>{
    return this.httpRequete.post(`${this.linkJSP}`,Commentaire);
  }
  deleteOneCommentaires(id: number): Observable<any>{
    return this.httpRequete.delete(`${this.linkJSP}/${id}`);
  }
 
}
