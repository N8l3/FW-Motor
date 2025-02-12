import { Injectable, TemplateRef, Type } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OverlaySidePanelService {
  private sliderOpen = new BehaviorSubject<boolean>(false);
  private contentType = new BehaviorSubject<string | null>(null);

  isOpen$ = this.sliderOpen.asObservable();
  contentType$ = this.contentType.asObservable();

  openSlider(content: string) {
    this.contentType.next(content);
    this.sliderOpen.next(true);
  }

  closeSlider() {
    this.sliderOpen.next(false);
    this.contentType.next(null);
  }
}
