import { Component } from '@angular/core';
import {Gender, User} from "../../model/user";
import {UserListViewComponent} from "../user-list-view/user-list-view.component";

@Component({
  selector: 'app-user-list-main',
  standalone: true,
  imports: [
    UserListViewComponent
  ],
  templateUrl: './user-list-main.component.html',
  styleUrl: './user-list-main.component.css'
})
export class UserListMainComponent {
  users: User[] = [{firstName: "first", lastName: "last", age: 80, gender: Gender.Male, activated: true}];
}


