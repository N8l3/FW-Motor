import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IDVSliderComponent } from './idv-slider.component';

describe('IDVSliderComponent', () => {
  let component: IDVSliderComponent;
  let fixture: ComponentFixture<IDVSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IDVSliderComponent]
    });
    fixture = TestBed.createComponent(IDVSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
