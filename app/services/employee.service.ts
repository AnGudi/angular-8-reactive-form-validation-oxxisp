import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';
import { environment } from '../environments/environment';

const baseUrl = `${environment.apiUrl}/users`;

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Employee[]>(`/home`);
  }

  register(user: Employee) {
    return this.http.post(`/register`, user);
  }

  delete(id: number) {
    return this.http.delete(`/home/${id}`);
  }
}
