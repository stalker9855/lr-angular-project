import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { wines } from './wines';

@Component({
  selector: 'app-wine',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './wine.html',
  styleUrl: './wine.scss',
})
export class Wine {
  wines = wines;
}
