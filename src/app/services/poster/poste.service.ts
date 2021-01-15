import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PosteService {
  private _refresh$ = new Subject();
  get refresh(): any {
    return this._refresh$;
  }
  linkJSP = "http://jsonplaceholder.typicode.com/posts";
  constructor(private httpRequete: HttpClient) { }
  getAllPost(): Observable<any> {
    return this.httpRequete.get(this.linkJSP);
  }
  getOnePost(id: number): Observable<any> {
    return this.httpRequete.get(`${this.linkJSP}/${id}`);
  }
  addPost(poster: any): Observable<any> {
    return this.httpRequete.post(`${this.linkJSP}`, poster).pipe(
      tap(() => {
        this._refresh$.next();
      }));
  }
  deleteOnePost(id: number): Observable<any> {
    return this.httpRequete.delete(`${this.linkJSP}/${id}`).pipe(
      tap(() => {
        this._refresh$.next();
      }));
  }
  getOnePostComment(id: number): Observable<any> {
    return this.httpRequete.get(`${this.linkJSP}/${id}/comments`);
  }
  updatePost(id:number,poster: any): Observable<any> {
    return this.httpRequete.put(`${this.linkJSP}/${id}`, poster).pipe(
      tap(() => {
        this._refresh$.next();
      }));
  }
}
