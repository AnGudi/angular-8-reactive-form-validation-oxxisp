import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import { EmployeeService } from '../services/employee.service';
// import { MustMatch } from '../_helpers/must-match.validator';

// import custom validator to validate that password and confirm password fields match
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  // loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router // private authenticationService: AuthenticationService, // private employeeService: EmployeeService
  ) {
    // if (this.authenticationService.currentUserValue) {
    //   this.router.navigate(['/']);
    // }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        phone: [
          '',
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(10),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue],
      }
      // {
      //   validator: MustMatch('password', 'confirmPassword'),
      // }
    );
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    console.log(this.registerForm.value);

    // this.loading = true;
    // this.employeeService
    //   .create(this.registerForm.value)
    //   .pipe(first())
    //   .subscribe(
    //     (data) => {
    //       this.router.navigate(['/login']);
    //     },
    //     (error) => {
    //       this.loading = false;
    //     }
    //   );
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
