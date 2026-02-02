import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HighlightCompletedTodo } from './highlight-completed-todo';

@Component({
  standalone: true,
  imports: [HighlightCompletedTodo],
  template: `<li appHighlightCompletedTodo [completed]="true">Hello</li>`,
})
class HostComponent {}

describe('HighlightCompletedTodo', () => {
  it('should create an instance', () => {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();

    const debugEl = fixture.debugElement.query(By.directive(HighlightCompletedTodo));
    expect(debugEl).toBeTruthy();
  });
});
