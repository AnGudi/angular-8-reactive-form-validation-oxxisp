import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { Employee } from '../models/employee';
import { AuthenticationService } from '../services/authentication.service';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  currentUser: Employee;
  currentUserSubscription: Subscription;
  users: Employee[] = [];

  constructor(
    private employeeService: EmployeeService,
    private authenticationService: AuthenticationService
  ) {
    this.currentUserSubscription =
      this.authenticationService.currentUser.subscribe((user) => {
        this.currentUser = user;
      });
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }

  deleteUser(id: number) {
    this.employeeService
      .delete(id)
      .pipe(first())
      .subscribe(() => {
        this.loadAllUsers();
      });
  }

  private loadAllUsers() {
    this.employeeService
      .getAll()
      .pipe(first())
      .subscribe((users) => {
        this.users = users;
      });
  }
}
