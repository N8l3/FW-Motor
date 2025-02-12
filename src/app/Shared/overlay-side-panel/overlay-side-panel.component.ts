import { Component, ComponentFactoryResolver, ComponentRef, Input, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { OverlaySidePanelService } from 'src/app/Services/overlay-side-panel.service';

@Component({
  selector: 'app-overlay-side-panel',
  templateUrl: './overlay-side-panel.component.html',
  styleUrls: ['./overlay-side-panel.component.css']
})
export class OverlaySidePanelComponent {
  isOpen = false;
  contentType: string | null = null;

  constructor(private sliderService: OverlaySidePanelService) {
    this.sliderService.isOpen$.subscribe(status => this.isOpen = status);
    this.sliderService.contentType$.subscribe(type => this.contentType = type);
  }

  close() {
    this.sliderService.closeSlider();
  }
}

