import { Component } from '@angular/core';

@Component({
  selector: 'app-group-info',
  imports: [],
  standalone: true,
  templateUrl: './group-info.html',
  styleUrl: './group-info.scss',
})
export class GroupInfo {
  student: String = 'Євсєєв Андрій Леонідович'
  groupNumber: String =  '508'
  faculty = 'Факультет комп\'ютерних наук'
  specialty = 'Інженерія програмного забезпечення F2'
}
