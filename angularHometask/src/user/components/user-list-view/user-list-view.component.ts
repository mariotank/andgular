import {Component, Input, OnChanges} from '@angular/core';
import {User} from "../../model/user";
import {JsonPipe} from "@angular/common";
import {UserCardComponent} from "../user-card/user-card.component";

@Component({
  selector: 'app-user-list-view',
  standalone: true,
  imports: [
    JsonPipe,
    UserCardComponent
  ],
  templateUrl: './user-list-view.component.html',
  styleUrl: './user-list-view.component.css',
})
export class UserListViewComponent implements OnChanges {
  ngOnChanges(): void {
    this.user = this.users[0];
  }
  @Input() users: User[] = [];
  public user!: User;
  public label: string = 'User list View Component';

  public onDeleteClick() {
    this.users.splice(0, 0);
  }
}
