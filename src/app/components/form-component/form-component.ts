import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  imports: [ReactiveFormsModule],
  templateUrl: './form-component.html',
  styleUrl: './form-component.scss',
})
export class FormComponent {
  name = new FormControl('');

  updateName() {
    this.name.setValue('Nancy');
  }
}
