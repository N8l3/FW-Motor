import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-payad',
  templateUrl: './payad.component.html',
  styleUrls: ['./payad.component.css']
})
export class PAYADComponent {

  @ViewChild('slider') slider!: ElementRef;
  @ViewChild('trackFill') trackFill!: ElementRef;

  // Labels and discount data
  sliderValues = [
    { km: '2,500 km', discount: '₹1,116' },
    { km: '5,000 km', discount: '₹990' },
    { km: '7,500 km', discount: '₹787' },
    { km: '10,000 km', discount: '₹487' },
    { km: 'Unlimited km', discount: '' }
  ];

  ngAfterViewInit(): void {
    this.updateSlider();
  }

  updateSlider(): void {
    const percent = (this.slider.nativeElement.value / (this.sliderValues.length - 1)) * 100;
    this.trackFill.nativeElement.style.width = percent + '%';
  }
}
