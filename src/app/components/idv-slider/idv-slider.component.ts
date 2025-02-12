import { Component } from '@angular/core';

@Component({
  selector: 'app-idv-slider',
  templateUrl: './idv-slider.component.html',
  styleUrls: ['./idv-slider.component.css']
})
export class IDVSliderComponent {
  idvValue: number = 4118584; // Default IDV value from API
  minValue: number = 3535584; // Min IDV value from API
  maxValue: number = 4840855; // Max IDV value from API

  // Example JSON Data (Simulating API Response)
  infoTextData = {
    text: "80% of users select IDV between ₹35,35,584 to ₹48,40,855"
  };

  // Update slider when input field changes
  updateSlider() {
    if (this.idvValue < this.minValue) this.idvValue = this.minValue;
    if (this.idvValue > this.maxValue) this.idvValue = this.maxValue;
  }

  // Update input field when slider changes
  updateInput(event: any) {
    this.idvValue = Number(event.target.value);
  }
}
