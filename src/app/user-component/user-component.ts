import { Component, effect, input, Input, OnInit } from '@angular/core';
import { User } from './user.interface';

@Component({
  selector: 'app-user-component',
  imports: [],
  standalone: true,
  templateUrl: './user-component.html',
  styleUrl: './user-component.scss',
})
export class UserComponent {
  user = input.required<User>();
}
