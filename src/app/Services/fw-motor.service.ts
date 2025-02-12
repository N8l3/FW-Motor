import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FwMotorService {
  private sliderOpen = new BehaviorSubject<boolean>(false);
    private contentType = new BehaviorSubject<string | null>(null);
  
    isOpen$ = this.sliderOpen.asObservable();
    contentType$ = this.contentType.asObservable();
  
  constructor() { }

    openPopup(content: string) {
      this.contentType.next(content);
      this.sliderOpen.next(true);
    }
  
    closePopup() {
      this.sliderOpen.next(false);
      this.contentType.next(null);
    }
}
