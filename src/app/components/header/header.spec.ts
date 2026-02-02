import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header } from './header';
import { provideRouter } from '@angular/router';

describe('Header', () => {
  it('should create', () => {
    TestBed.configureTestingModule({
      imports: [Header],
      providers: [provideRouter([])],
    });

    const fixture = TestBed.createComponent(Header);
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });
});
