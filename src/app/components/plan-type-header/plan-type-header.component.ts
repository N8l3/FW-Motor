import { Component } from '@angular/core';
import { FwMotorService } from 'src/app/Services/fw-motor.service';

@Component({
  selector: 'app-plan-type-header',
  templateUrl: './plan-type-header.component.html',
  styleUrls: ['./plan-type-header.component.css'],
})
export class PlanTypeHeaderComponent {
  selectedPolicy: string = 'comprehensive'; // Default selected policy
  selectedTenure: string = '1'; // Default selected tenure

  tenures = [
    { value: '1', label: '1 year', discount: '' },
    { value: '2', label: '2 years', discount: 'Save ₹1,499' },
    { value: '3', label: '3 years', discount: 'Save ₹2,999' },
  ];

  selectTenure(tenure: string) {
    this.selectedTenure = tenure;
  }
  constructor(private motorService: FwMotorService) {}
  ngOnInit(): void {}
  getPolicyType() {}

  openPolicyTypePopup() {
    this.motorService.openPopup('policyTypePopup');
  }
}
