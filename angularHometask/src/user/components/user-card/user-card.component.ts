import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {User} from "../../model/user";
import {JsonPipe} from "@angular/common";


@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    this.userName = `${this.user.firstName} ${this.user.lastName}`;
  }

  @Input() user!: User;

  public userName!: string;

  @Output() deleteCurrentUser: EventEmitter<void> = new EventEmitter();

  public onActivateClick() {
    this.user.activated = !this.user.activated;
  }

  onDeleteClick() {
    this.deleteCurrentUser.emit();
  }
}
