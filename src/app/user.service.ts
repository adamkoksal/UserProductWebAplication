import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/users';
  private signupUrl = 'http://localhost:8080/signup';
  private loginUrl = 'http://localhost:8080/login';
  private approveUrl = 'http://localhost:8080/users/approve';
  private isManagerUrl = 'http://localhost:8080/login/is-manager';


  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  get(id): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  addUser(user): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, user);
  }

  updateUser(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  signUpUser(user): Observable<Object> {
    return this.http.post(`${this.signupUrl}`, user);
  }

  login(user): Observable<Object> {
    return this.http.post(`${this.loginUrl}`, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }

  approveUser(user) {
    return this.http.post(`${this.approveUrl}`, user);
  }

  getUserByUsername(username: string) {
    return this.http.get<any[]>(`${this.baseUrl}/username=${username}`);
  }
}
