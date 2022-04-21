import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  users!: Employee[];

  constructor(private userservice: EmployeeService) {}

  ngOnInit() {
    this.userservice
      .getAll()
      .pipe(first())
      .subscribe((users) => (this.users = users));
  }

  deleteUser(id: string) {
    const user = this.users.find((x) => x.id === id);
    if (!user) return;
    user.isDeleting = true;
    this.userservice
      .delete(id)
      .pipe(first())
      .subscribe(() => (this.users = this.users.filter((x) => x.id !== id)));
  }
}
