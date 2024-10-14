import {booleanAttribute, Component, Input} from '@angular/core';
import {User} from "../../model/user";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-user-list-view',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './user-list-view.component.html',
  styleUrl: './user-list-view.component.css',
})
export class UserListViewComponent {
  @Input({transform: booleanAttribute}) users: User[] = [];
}
