import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanCardSummaryComponent } from './plan-card-summary.component';

describe('PlanCardSummaryComponent', () => {
  let component: PlanCardSummaryComponent;
  let fixture: ComponentFixture<PlanCardSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanCardSummaryComponent]
    });
    fixture = TestBed.createComponent(PlanCardSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
