import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeAddonComponent } from './customize-addon.component';

describe('CustomizeAddonComponent', () => {
  let component: CustomizeAddonComponent;
  let fixture: ComponentFixture<CustomizeAddonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomizeAddonComponent]
    });
    fixture = TestBed.createComponent(CustomizeAddonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
