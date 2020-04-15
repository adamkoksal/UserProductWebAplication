import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent  {
  user;
  users: User[];
  filteredUsers: any[] = [];
  condition;

  users$: Observable<User[]>;

  columns = [ "Username", "isManager", ""];

  constructor(private userService: UserService, private route: ActivatedRoute) {

    this.userService.getUsers().subscribe(users => {
      this.users = users;

      route.queryParamMap.subscribe(params => {
        this.condition = params.get('condition');

        this.filteredUsers = (this.condition) ?
          this.users.filter(u => u.approved !== true) :
          this.users.filter(u => u.approved === true);

      });
    });
  }

  approve(user) {
    this.userService.approveUser(user)
      .subscribe(data => console.log(data), error => console.log(error));
    location.reload();
  }

  decline(user) {
    if (confirm('This will delete user information. Do you wish to continue?')) {
      this.userService.deleteUser(user.id)
        .subscribe(data => console.log(data), error => console.log(error));
      location.reload();
    }
  }
}
