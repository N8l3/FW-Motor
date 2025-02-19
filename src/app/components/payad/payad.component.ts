import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-payad',
  templateUrl: './payad.component.html',
  styleUrls: ['./payad.component.css']
})
export class PAYADComponent {
   sliderValues = [
    { km: '2,500 km', discount: 3435 },
    { km: '5,000 km', discount: 1620 },
    { km: '7,500 km', discount: 1003 },
    { km: '10,000 km', discount: 407 },
    { km: 'Unlimited km', discount: 0 },
  ];

  selectedIndex: number = 2; // Default to 7500
  @ViewChild('slider') slider!: ElementRef<HTMLInputElement>;

  ngAfterViewInit() {
    this.updateSliderUI();
  }

  snapToBreakpoints(event: any): void {
    const slider = event.target;
    const value = parseInt(slider.value, 10);
    this.selectedIndex = this.getClosestIndex(value);
    slider.value = this.selectedIndex.toString();
    this.updateSliderUI();
  }

  getClosestIndex(value: number): number {
    return this.sliderValues.reduce((closest, _, index) =>
      Math.abs(index - value) < Math.abs(closest - value) ? index : closest,
      0
    );
  }

  updateSliderUI(): void {
    const percentage = (this.selectedIndex / (this.sliderValues.length - 1)) * 100;
    this.slider.nativeElement.style.background = `linear-gradient(to right, #ec6625 ${percentage}%, #ddd ${percentage}%)`;
  }
  isActive(index: number): boolean {
    return index <= this.selectedIndex-1;
  }
}
