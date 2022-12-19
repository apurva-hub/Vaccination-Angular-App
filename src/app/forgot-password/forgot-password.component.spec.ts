import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordComponent } from './forgot-password.component';

describe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForgotPasswordComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('toggle check', () => {
    expect(component.toggleStatus).withContext('False initially').toBeFalse();
    component.toggle();
    expect(component.toggleStatus)
      .withContext('turns true on 1st click')
      .toBeTrue();
    component.toggle();
    expect(component.toggleStatus)
      .withContext('turns false on 2nd click')
      .toBeFalse();
  });
});
