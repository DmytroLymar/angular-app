import { Component, signal } from '@angular/core';
import { Greeting } from '../components/greeting/greeting';
import { Counter } from '../components/counter/counter';
import { FormComponent } from '../components/form-component/form-component';
import { ProfileEditor } from '../components/profile-editor/profile-editor';

@Component({
  selector: 'app-home',
  imports: [Greeting, Counter, FormComponent, ProfileEditor],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  homeMessage = signal('Hello world!');
  keyUpHandler(event: KeyboardEvent) {
    console.log(`user pressed the ${event.key} key`);
  }
}
