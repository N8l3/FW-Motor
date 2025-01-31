import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PAYADHIWPopupComponent } from './payad-hiw-popup.component';

describe('PAYADHIWPopupComponent', () => {
  let component: PAYADHIWPopupComponent;
  let fixture: ComponentFixture<PAYADHIWPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PAYADHIWPopupComponent]
    });
    fixture = TestBed.createComponent(PAYADHIWPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
