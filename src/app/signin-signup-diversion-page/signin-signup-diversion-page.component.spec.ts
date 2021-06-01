import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninSignupDiversionPageComponent } from './signin-signup-diversion-page.component';

describe('SigninSignupDiversionPageComponent', () => {
  let component: SigninSignupDiversionPageComponent;
  let fixture: ComponentFixture<SigninSignupDiversionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninSignupDiversionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninSignupDiversionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
