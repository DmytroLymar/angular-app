import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

type LoginFormModel = {
  email: FormControl<string>;
  password: FormControl<string>;
};

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './login-form.html',
  styleUrl: './login-form.scss',
})
export class LoginForm {
  private fb = inject(NonNullableFormBuilder);

  // ✅ Typed + nonNullable (без |null)
  form: FormGroup<LoginFormModel> = this.fb.group({
    email: this.fb.control('', {
      validators: [Validators.required, Validators.email],
    }),
    password: this.fb.control('', {
      validators: [Validators.required, Validators.minLength(8)],
    }),
  });

  // Зручні гетери для template
  get email() {
    return this.form.controls.email;
  }
  get password() {
    return this.form.controls.password;
  }

  // Показувати помилки після взаємодії або після submit
  showError(control: AbstractControl) {
    return control.invalid && (control.touched || control.dirty || this.submitted);
  }

  submitted = false;

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      // ✅ показати всі помилки одразу
      this.form.markAllAsTouched();
      return;
    }

    // ✅ getRawValue() повертає typed дані (і включає disabled)
    const data = this.form.getRawValue();
    console.log('LOGIN DATA:', data);

    // приклад: очистити форму після успіху
    this.form.reset(); // бо nonNullable → скине до '' а не null
    this.submitted = false;
  }
}
