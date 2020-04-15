import { Component} from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/user';
import { AppComponent } from 'src/app/app.component';
import { ManagerService } from 'src/app/manager.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = <User>{};

  constructor(private userService: UserService, private router: Router, private managerService: ManagerService) {
  }

  Submit(value) {
    this.userService.login(value)
      .subscribe((res:any) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.managerService.isManager();
        this.router.navigate(['/admin/products']);
      }, error => {
        console.log(error);
        alert("Wrong username password combination or user not approved.")
        this.user.password = "";
      });
  }



}
