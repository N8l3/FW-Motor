import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlaySidePanelComponent } from './overlay-side-panel.component';

describe('OverlaySidePanelComponent', () => {
  let component: OverlaySidePanelComponent;
  let fixture: ComponentFixture<OverlaySidePanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverlaySidePanelComponent]
    });
    fixture = TestBed.createComponent(OverlaySidePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
