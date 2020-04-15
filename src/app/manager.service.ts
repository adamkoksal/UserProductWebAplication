import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  public manager;
  private isManagerUrl = 'http://localhost:8080/login/is-manager';

  constructor(private http: HttpClient, private userService: UserService) { }

  isManager():boolean {
    if (this.userService.loggedIn()) {
      var t = localStorage.getItem('token');
      var o = {
        "token" : t
      };
      this.http.post(`${this.isManagerUrl}`, o)
        .subscribe(data => this.manager = data);
      return this.manager;
    } else {
      return false;
    } 
  }
}
