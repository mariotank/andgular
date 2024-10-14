import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UserListMainComponent} from "../user/components/user-list-main/user-list-main.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserListMainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularHometask';
}
