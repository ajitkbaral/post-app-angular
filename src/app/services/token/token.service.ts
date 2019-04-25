import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpHeaderOptions ={
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})

export class TokenService {

  constructor(private http: HttpClient) { }

  signIn(email: string, password: string): Observable<any> {

    const user = {
      email,
      password
    }

    return this.http.post<any>('http://192.168.0.106:3000/auth/sign_in', user, httpHeaderOptions);
  }
}
