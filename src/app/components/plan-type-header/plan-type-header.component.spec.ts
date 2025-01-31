import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanTypeHeaderComponent } from './plan-type-header.component';

describe('PlanTypeHeaderComponent', () => {
  let component: PlanTypeHeaderComponent;
  let fixture: ComponentFixture<PlanTypeHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanTypeHeaderComponent]
    });
    fixture = TestBed.createComponent(PlanTypeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
