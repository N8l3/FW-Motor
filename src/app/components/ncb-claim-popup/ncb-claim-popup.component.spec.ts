import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NCBClaimPopupComponent } from './ncb-claim-popup.component';

describe('NCBClaimPopupComponent', () => {
  let component: NCBClaimPopupComponent;
  let fixture: ComponentFixture<NCBClaimPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NCBClaimPopupComponent]
    });
    fixture = TestBed.createComponent(NCBClaimPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
