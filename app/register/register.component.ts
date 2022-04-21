import { Component, OnInit } from '@angular/core';
import {
  AbstractControlOptions,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { EmployeeService } from '../services/employee.service';
import { MustMatch } from '../_helpers/must-match.validator';

// import custom validator to validate that password and confirm password fields match
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  id!: string;
  isAddMode!: boolean;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) {}

  ngOnInit() {
    // this.id = this.route.snapshot.params['id'];
    // this.isAddMode = !this.id;

    this.registerForm = this.formBuilder.group(
      {
        title: ['', Validators.required],
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
      },
      {
        validator: MustMatch('password', 'confirmPassword'),
      }
    );

    // if (!this.isAddMode) {
    //   this.employeeService
    //     .getById(this.id)
    //     .pipe(first())
    //     .subscribe((x) => this.registerForm.patchValue(x));
    // }
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    // this.router.navigate(['/login']);
    if (this.registerForm.invalid) {
      return;
    }
    console.log(this.registerForm.value);

    // display form values on success
    // alert(
    //   'SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 7)
    // );
    // this.loading = true;
    // if (this.isAddMode) {
    //   this.createUser();
    // } else {
    //   this.updateUser();
    // }
  }

  // private createUser() {
  //   this.employeeService
  //     .create(this.registerForm.value)
  //     .pipe(first())
  //     .subscribe(() => {
  //       // this.alertService.success('User added', { keepAfterRouteChange: true });
  //       this.router.navigate(['../'], { relativeTo: this.route });
  //     })
  //     .add(() => (this.loading = false));
  // }

  // private updateUser() {
  //   this.employeeService
  //     .update(this.id, this.registerForm.value)
  //     .pipe(first())
  //     .subscribe(() => {
  //       // this.alertService.success('User updated', {
  //       //   keepAfterRouteChange: true,
  //       // });
  //       this.router.navigate(['../../'], { relativeTo: this.route });
  //     })
  //     .add(() => (this.loading = false));
  // }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
