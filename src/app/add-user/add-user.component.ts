import { Component, OnInit} from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit  {
  id;
  user = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService) {

      this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) {
        this.user = this.userService.get(this.id).pipe(take(1)).subscribe(u => this.user = u);
      }
    }

  ngOnInit() {
  }

  save(value) {
    if (this.id) {
      this.userService.updateUser(this.id, value)
        .subscribe(data => console.log(data), error => console.log(error));
    } else {
      this.userService.addUser(value)
        .subscribe(data => console.log(data), error => console.log(error));
    }
    this.router.navigate(['admin/users']);
  }


  delete() {
    if (confirm("Are you sure?")) {
      if (this.id) {
        this.userService.deleteUser(this.id)
        .subscribe(data => console.log(data), error => console.log(error));
      }
      this.router.navigate(['admin/users']);
    }
  }

  nothing() {
    
  }

}
