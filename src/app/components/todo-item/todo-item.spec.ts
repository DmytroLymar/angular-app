import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItem } from './todo-item';

describe('TodoItem', () => {
  it('should create', () => {
    const fixture = TestBed.createComponent(TodoItem);

    fixture.componentRef.setInput('todo', {
      id: 't1',
      title: 'Learn Angular',
      completed: false,
    });

    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });
});
