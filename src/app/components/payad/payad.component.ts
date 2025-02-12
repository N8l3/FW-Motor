import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-payad',
  templateUrl: './payad.component.html',
  styleUrls: ['./payad.component.css']
})
export class PAYADComponent {

  selectedIndex: number = 2; // Default selection
  sliderValues = [
    { km: '2,500 km', discount: '79,563' },
    { km: '5,000 km', discount: '1,43,311' },
    { km: '7,500 km', discount: '1,51,618' },
    { km: '10,000 km', discount: '1,61,586' },
    { km: 'Unlimited km' }
  ];

  ngAfterViewInit(): void {
    this.updateSlider();
  }

  updateSlider() {
    console.log("Selected:", this.selectedIndex);
  }
}
