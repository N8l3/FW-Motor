import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PAYADComponent } from './payad.component';

describe('PAYADComponent', () => {
  let component: PAYADComponent;
  let fixture: ComponentFixture<PAYADComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PAYADComponent]
    });
    fixture = TestBed.createComponent(PAYADComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
