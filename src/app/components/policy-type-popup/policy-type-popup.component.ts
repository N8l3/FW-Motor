import { Component } from '@angular/core';
import { FwMotorService } from 'src/app/Services/fw-motor.service';

@Component({
  selector: 'app-policy-type-popup',
  templateUrl: './policy-type-popup.component.html',
  styleUrls: ['./policy-type-popup.component.css']
})
export class PolicyTypePopupComponent {
   isOpen = false;
    contentType: string | null = null;
    selectedPolicy:string = '';
    policies = [
      {
        type: 'comprehensive',
        title: 'Comprehensive',
        description: '(Own damage + Third party)',
        details: [
          { label: 'Own damage', content: 'Covers expenses related to damage or destruction of your vehicle from an accident or collision.' },
          { label: 'Third party', content: 'Covers expenses related to injury, death, or property damage of others when you\'re at fault.' }
        ]
      },
      {
        type: 'ownDamage',
        title: 'Own Damage',
        description: '',
        details: [
          { label: 'Own damage', content: 'Covers expenses related to damage or destruction of your vehicle from an accident or collision.' }
        ],
        note: 'Note: You need a valid third-party policy to buy the own damage cover. Well ask for the third-party details in the next step'
      }
    ];
  
    constructor(private motorService: FwMotorService) {
      this.motorService.isOpen$.subscribe(status => this.isOpen = status);
      this.motorService.contentType$.subscribe(type => this.contentType = type);
    }

    selectPolicy(policy: string) {
      this.selectedPolicy = policy;
    }
  
    close() {
      this.motorService.closePopup();
    }
}
