import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCovergePopupComponent } from './view-coverge-popup.component';

describe('ViewCovergePopupComponent', () => {
  let component: ViewCovergePopupComponent;
  let fixture: ComponentFixture<ViewCovergePopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewCovergePopupComponent]
    });
    fixture = TestBed.createComponent(ViewCovergePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
