import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyDurationPopupComponent } from './policy-duration-popup.component';

describe('PolicyDurationPopupComponent', () => {
  let component: PolicyDurationPopupComponent;
  let fixture: ComponentFixture<PolicyDurationPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolicyDurationPopupComponent]
    });
    fixture = TestBed.createComponent(PolicyDurationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
