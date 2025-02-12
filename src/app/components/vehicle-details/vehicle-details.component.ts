import { Component, OnInit } from '@angular/core';
import { OverlaySidePanelService } from 'src/app/Services/overlay-side-panel.service';
import { VehicleDetailsPopupComponent } from '../vehicle-details-popup/vehicle-details-popup.component';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent  implements OnInit{
  customerName: string = 'Mohan Mangal';
  vehicleModel: string = 'BMW';
  engineCapacity: string = 'MI SPORTS 1988';
  vehicleNumber: string = 'MHO12345667';
  fuelType: string = 'PETROL';
  vehicleYear: string = '1921';
  isSliderOpen = false;
  sliderContent = '';
  registeredUnderIndividual: boolean = true;
  zdCoverPrevious: boolean = true;
  ownershipTransferred: boolean = false;

  previousPolicyType: string = 'Comprehensive';
  policyTypes: string[] = ['Comprehensive', 'Third-Party', 'Own Damage'];
  ncb: number = 45;
  policyEndDate: string = '28 Feb 2025';
  


  constructor( private sliderService:OverlaySidePanelService) {

  }
  ngOnInit(): void {
  
  }
  
  toggleRegisteredStatus() {
    console.log('Registered under individual:', this.registeredUnderIndividual);
  }

  toggleZdCover() {
    console.log('ZD Cover in previous policy:', this.zdCoverPrevious);
  }

  toggleOwnershipTransferred() {
    console.log('Ownership transferred:', this.ownershipTransferred);
  }

  openVehicleDetailsPopup(){
    this.sliderService.openSlider('vehicle-details');
  }




}
