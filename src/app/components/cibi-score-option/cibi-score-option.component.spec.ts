import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CibiScoreOptionComponent } from './cibi-score-option.component';

describe('CibiScoreOptionComponent', () => {
  let component: CibiScoreOptionComponent;
  let fixture: ComponentFixture<CibiScoreOptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CibiScoreOptionComponent]
    });
    fixture = TestBed.createComponent(CibiScoreOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
