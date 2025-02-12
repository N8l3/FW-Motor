import { Component } from '@angular/core';

@Component({
  selector: 'app-premium-summary',
  templateUrl: './premium-summary.component.html',
  styleUrls: ['./premium-summary.component.css']
})
export class PremiumSummaryComponent {
  basePremium: number = 313196;
  additionalCovers: number = 256081;
  discount: number = 56275;

  get subTotal(): number {
    return this.basePremium + this.additionalCovers;
  }

  get totalPremium(): number {
    return this.subTotal - this.discount;
  }

  gstPercentage: number = 18;

  isExpanded: boolean = false;  

  additionalCoverList = [
    { name: 'Road Side Assistance', amount: 146 },
    { name: 'Zero Depreciation', amount: 5046 },
    { name: 'Standalone Personal Accident Cover', amount: 375 }
  ];

  toggleAdditionalCovers() {
    this.isExpanded = !this.isExpanded;
  }
}
