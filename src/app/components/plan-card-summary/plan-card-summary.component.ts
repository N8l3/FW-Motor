import { Component } from '@angular/core';

@Component({
  selector: 'app-plan-card-summary',
  templateUrl: './plan-card-summary.component.html',
  styleUrls: ['./plan-card-summary.component.css']
})
export class PlanCardSummaryComponent {
  carousels = [
    {
      plans: [
        {
          title1: 'Custom',
          title2:'Selection',
          description: 'Your coverage, your way, always.',
          price: 191334,
          coverage: 'Own damage policy cover till unlimited km',
          includes: ['Zero Depreciation (ZD)', 'Consumable Cover', 'Accident Cover for Passengers', 'SmartSaver Plus', 'Engine Protect', 'Tyre Protect'],
          recommended: false,
          selected: false,
          addonTitle:'Includes',
          identity: { bold: 'Custom Selection', regular: '' },
          addons: [
            { name: 'Roadside Assistance' },
            { name: 'Windshield Protection' }
          ]
        },
        {
          title1: 'Zero dep,',
          title2: 'zero worries',
          description: 'Maximum coverage without depreciation',
          price: 174334,
          coverage: 'Own damage policy cover till unlimited km',
          includes: ['Zero Depreciation (ZD)', 'Consumable Cover', 'Accident Cover for Passengers', 'SmartSaver Plus'],
          recommended: true,
          selected: true,
          addonTitle:'Everything in No frills, plus',
          identity: { bold: 'Zero dep,', regular: 'zero worries' },
          addons: [
            { name: 'Accident Recovery' },
            { name: 'Extended Coverage' }
          ]
        },
        {
          title1: 'Smart plan',
          title2:',better pricing',
          description: 'Fair pricing based on usage and protection needs',
          price: 187683,
          coverage: 'Own damage policy cover till unlimited km',
          includes: ['Loss of Personal Belongings', 'Key Protect', 'Return to Invoice', 'Emergency Medical Expenses'],
          recommended: false,
          selected: false,
          addonTitle:'Everything in Zero dep, plus',
          identity: { bold: 'Smart plan,', regular: 'better pricing' },
          addons: [
            { name: 'Smart Saver Plus' },
            { name: 'Key Protection' }
          ]
        }
      ]
    }
  ];

  selectPlan(carouselIndex: number, planIndex: number) {
    this.carousels[carouselIndex].plans.forEach(plan => (plan.selected = false)); // Deselect all
    this.carousels[carouselIndex].plans[planIndex].selected = true; // Select clicked one
  }

  scroll(direction: string) {
    const carouselWrapper = document.querySelector('.carousel-wrapper') as HTMLElement;
    if (direction === 'left') {
      carouselWrapper.scrollBy({ left: -290, behavior: 'smooth' });
    } else {
      carouselWrapper.scrollBy({ left: 290, behavior: 'smooth' });
    }
  }
}
