import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FwMotorComponent } from './fw-motor.component';

describe('FwMotorComponent', () => {
  let component: FwMotorComponent;
  let fixture: ComponentFixture<FwMotorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FwMotorComponent]
    });
    fixture = TestBed.createComponent(FwMotorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
