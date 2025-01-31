import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyTypePopupComponent } from './policy-type-popup.component';

describe('PolicyTypePopupComponent', () => {
  let component: PolicyTypePopupComponent;
  let fixture: ComponentFixture<PolicyTypePopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolicyTypePopupComponent]
    });
    fixture = TestBed.createComponent(PolicyTypePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
