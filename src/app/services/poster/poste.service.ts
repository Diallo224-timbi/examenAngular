import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Post } from 'src/app/model/post';
@Injectable({
  providedIn: 'root'
})
export class PosteService {
  private _refresh$ = new Subject();
  get refresh(): any {
    return this._refresh$;
  }
  linkJSP = "https://jsonplaceholder.typicode.com/posts";
  
  constructor(private httpRequete: HttpClient) { }
  getAllPost(): Observable<any> {
    return this.httpRequete.get(this.linkJSP);
  }
  getOnePost(id: number): Observable<Post> {
    return this.httpRequete.get<Post>(`${this.linkJSP}/${id}`);
  }
  addPost(poster: any): Observable<any> {
    return this.httpRequete.post(`${this.linkJSP}`, poster);
  }
  deleteOnePost(id: number): Observable<any> {
    return this.httpRequete.delete(`${this.linkJSP}/${id}`);
  }
  getOnePostComment(id: number): Observable<any> {
    return this.httpRequete.get(`${this.linkJSP}/${id}/comments`);
  }
  updatePost(id:number,poster: any): Observable<any> {
    return this.httpRequete.put(`${this.linkJSP}/${id}`, poster);
  }
}
