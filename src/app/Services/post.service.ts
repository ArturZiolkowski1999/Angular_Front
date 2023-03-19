import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { switchMap } from 'rxjs/operators';
import { Config } from '../Models/config';
import { Post } from '../Models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getApiUrl(): Observable<Config> {
    return this.http.get<Config>('/assets/config.json');
  }
  
  getPostById(id: number): Observable<Post> {
    let baseUrl: string;
    return this.getApiUrl().pipe(
      switchMap(config => {
        baseUrl = config.postApiUrl;
        return this.http.get<Post>(`${baseUrl}/${id}`);
      })
    );
  }

  getAllPosts(): Observable<Post[]>{
    let baseUrl: string;
    return this.getApiUrl().pipe(
      switchMap(config => {
        baseUrl = config.postApiUrl;
        return this.http.get<Post[]>(`${baseUrl}`);
      })
    );
  }
}
