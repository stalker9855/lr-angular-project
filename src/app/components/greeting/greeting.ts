import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-greeting',
  imports: [RouterLink],
  templateUrl: './greeting.html',
  styleUrl: './greeting.scss',
})
export class Greeting {}
