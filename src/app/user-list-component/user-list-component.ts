import { Component, DestroyRef, effect, OnInit, signal } from '@angular/core';
import { User } from '../user-component/user.interface';
import { HttpClient } from '@angular/common/http';
import { UserComponent } from '../user-component/user-component';
import { CommonModule } from '@angular/common';
import { inject } from '@angular/core';
import { interval } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-user-list-component',
  standalone: true,
  imports: [CommonModule, UserComponent],
  templateUrl: './user-list-component.html',
  styleUrl: './user-list-component.scss',
})
export class UserListComponent implements OnInit {
  users = signal<User[]>([]);
  // users: User[] = [];

  private http = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    const subscription = this.http
      .get<User[]>(`https://reqres.in/api/users/`, {
        headers: {
          'x-api-key': 'reqres_070fbf95f70f4d9d9aa2c9d927c68621',
        },
      })
      .subscribe({
        next: (value: any) => {
          this.users.set(value.data);
        },
      });
    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
}

// ngOnInit(): void {
//   this.http
//     .get(`https://reqres.in/api/users/`, {
//       headers: {
//         'x-api-key': 'reqres_070fbf95f70f4d9d9aa2c9d927c68621',
//       },
//     })
//     .subscribe((users: any) => {
//       this.users = users.data;
//       console.log
//     });
// }
