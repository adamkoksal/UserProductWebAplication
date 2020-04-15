import { Component} from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  registerUserData = {}

  constructor(private userService: UserService, private router: Router) { }

  submit(value) {
    this.userService.signUpUser(value)
        .subscribe(data => console.log(data), error => console.log(error));
    this.router.navigate(['/signup-successful']);
  }


}
