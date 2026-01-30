import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { User } from '../../model/user.model';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class Users {
  private readonly usersService = inject(UserService);

  users$!: Observable<User[]>;
  error: string | null = null;

  ngOnInit() {
    this.users$ = this.usersService.getUsers().pipe(
      catchError((err) => {
        this.error = err.message;
        return of([]);
      }),
    );
  }
}
