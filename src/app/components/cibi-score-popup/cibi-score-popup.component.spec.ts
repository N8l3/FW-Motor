import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CibiScorePopupComponent } from './cibi-score-popup.component';

describe('CibiScorePopupComponent', () => {
  let component: CibiScorePopupComponent;
  let fixture: ComponentFixture<CibiScorePopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CibiScorePopupComponent]
    });
    fixture = TestBed.createComponent(CibiScorePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
