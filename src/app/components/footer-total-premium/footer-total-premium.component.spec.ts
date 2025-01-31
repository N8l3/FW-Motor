import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterTotalPremiumComponent } from './footer-total-premium.component';

describe('FooterTotalPremiumComponent', () => {
  let component: FooterTotalPremiumComponent;
  let fixture: ComponentFixture<FooterTotalPremiumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterTotalPremiumComponent]
    });
    fixture = TestBed.createComponent(FooterTotalPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
