import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpHeaderOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

const url = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})

export class TokenService {

  constructor(private http: HttpClient) { }

  signIn(email: string, password: string): Observable<any> {

    const user = {
      email,
      password
    };

    const signInUrl = `${url}/sign_in`;

    return this.http.post<any>(signInUrl, user, httpHeaderOptions);
  }

  signUp(email: string, password: string): Observable<any> {
    const signUpUrl = `${url}/auth`;

    const user = {
      email,
      password
    };

    return this.http.post<any>(signUpUrl, user, httpHeaderOptions);
  }
}
