import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  // $manager;

  constructor(private userService: UserService, private router: Router, private managerService: ManagerService ) {

  }

  loggedIn() {
    return this.userService.loggedIn();
  }

  logout() {
    this.userService.logout();
    this.router.navigate(["/"]);
  }

  _isManager() {
    if (this.loggedIn() && this.managerService.manager) {
      return true;
    } else {
      return false;
    }
  }
}
