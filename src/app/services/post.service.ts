import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/Post';

const httpHeaderOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

const url = 'http://localhost:3000/api/v1';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    const postsUrl = `${url}/posts`;
    return this.http.get<any>(postsUrl);
  }

  getPost(id: string): Observable<any> {
    const postUrl = `${url}/posts/${id}`;
    return this.http.get<any>(postUrl);
  }

  createPost(title: string, description: string): Observable<any> {
    const createPostUrl = `${url}/posts/`;
    const post = {
      title,
      description
    };
    return this.http.post<any>(createPostUrl, post, httpHeaderOptions);
  }

  updatePost(post: Post): Observable<any> {
    const updatePostUrl = `${url}/posts/${post.id}`;
    return this.http.put<any>(updatePostUrl, post, httpHeaderOptions);
  }

  deletePost(id: number): Observable<any> {
    const deletePostUrl = `${url}/posts/${id}`;
    return this.http.delete<any>(deletePostUrl);
  }

}
