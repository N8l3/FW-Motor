import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FwMotorComponent } from './page/fw-motor.component';
import { PolicyTypePopupComponent } from './components/policy-type-popup/policy-type-popup.component';
import { PlanTypeHeaderComponent } from './components/plan-type-header/plan-type-header.component';
import { VehicleDetailsComponent } from './components/vehicle-details/vehicle-details.component';
import { VehicleDetailsPopupComponent } from './components/vehicle-details-popup/vehicle-details-popup.component';
import { IDVSliderComponent } from './components/idv-slider/idv-slider.component';
import { PremiumSummaryComponent } from './components/premium-summary/premium-summary.component';
import { CibiScoreOptionComponent } from './components/cibi-score-option/cibi-score-option.component';
import { CibiScorePopupComponent } from './components/cibi-score-popup/cibi-score-popup.component';
import { PAYADComponent } from './components/payad/payad.component';
import { PlanCardSummaryComponent } from './components/plan-card-summary/plan-card-summary.component';
import { ViewCovergePopupComponent } from './components/view-coverge-popup/view-coverge-popup.component';
import { CustomizeAddonComponent } from './components/customize-addon/customize-addon.component';
import { FooterTotalPremiumComponent } from './components/footer-total-premium/footer-total-premium.component';
import { NCBClaimPopupComponent } from './components/ncb-claim-popup/ncb-claim-popup.component';
import { PolicyDurationPopupComponent } from './components/policy-duration-popup/policy-duration-popup.component';
import { PAYADHIWPopupComponent } from './components/payad-hiw-popup/payad-hiw-popup.component';
import { LeftSidePanelComponent } from './components/left-side-panel/left-side-panel.component';
import { RightSidePanelComponent } from './components/right-side-panel/right-side-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    FwMotorComponent,
    PolicyTypePopupComponent,
    PlanTypeHeaderComponent,
    VehicleDetailsComponent,
    VehicleDetailsPopupComponent,
    IDVSliderComponent,
    PremiumSummaryComponent,
    CibiScoreOptionComponent,
    CibiScorePopupComponent,
    PAYADComponent,
    PlanCardSummaryComponent,
    ViewCovergePopupComponent,
    CustomizeAddonComponent,
    FooterTotalPremiumComponent,
    NCBClaimPopupComponent,
    PolicyDurationPopupComponent,
    PAYADHIWPopupComponent,
    LeftSidePanelComponent,
    RightSidePanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
