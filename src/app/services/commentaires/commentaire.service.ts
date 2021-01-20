import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {
  private _refresh$ = new Subject();
  get refresh(): any {
    return this._refresh$;
  }

  linkJSP="https://jsonplaceholder.typicode.com/comments";

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
  updateComment(id:number,comment: any): Observable<any> {
    return this.httpRequete.put(`${this.linkJSP}/${id}`, comment);
  }
 
}
