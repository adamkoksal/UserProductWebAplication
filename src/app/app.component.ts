import { Component } from "@angular/core";
import { UserService } from "./user.service";
import { ManagerService } from "./manager.service";
import { map } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "my-website";

  constructor(
    private managerService: ManagerService,
    userService: UserService
  ) {
    managerService.isManager();
  }
}
