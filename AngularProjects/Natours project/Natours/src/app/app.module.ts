import { NatSuccessPopupComponent } from './nat-success-popup/nat-success-popup.component';
import { NatTermsPopupComponent } from './nat-terms-popup/nat-terms-popup.component';
import { NatPrivacyPopupComponent } from './nat-privacy-popup/nat-privacy-popup.component';
import { NatCarriersPopupComponent } from './nat-carriers-popup/nat-carriers-popup.component';
import { NatContactPopupComponent } from './nat-contact-popup/nat-contact-popup.component';
import { NatCompanyPopupComponent } from './nat-company-popup/nat-company-popup.component';
import { NatBookingPopupComponent } from './nat-booking-popup/nat-booking-popup.component';
import { NatStoriesPopupComponent } from './nat-stories-popup/nat-stories-popup.component';
import { NatPopupComponent } from './nat-popup/nat-popup.component';
import { NatFooterComponent } from './nat-footer/nat-footer.component';
import { NatBookComponent } from './nat-book/nat-book.component';
import { NatToursComponent } from './nat-tours/nat-tours.component';
import { NatFeaturesComponent } from './nat-features/nat-features.component';
import { NatAboutComponent } from './nat-about/nat-about.component';
import { NatHeaderComponent } from './nat-header/nat-header.component';
import { NatNavigationComponent } from './nat-navigation/nat-navigation.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NatStoriesComponent } from './nat-stories/nat-stories.component';


@NgModule({
  declarations: [
    AppComponent,
    NatNavigationComponent,
    NatHeaderComponent,
    NatAboutComponent,
    NatFeaturesComponent,
    NatToursComponent,
    NatStoriesComponent,
    NatBookComponent,
    NatFooterComponent,
    NatPopupComponent,
    NatStoriesPopupComponent,
    NatBookingPopupComponent,
    NatCompanyPopupComponent,
    NatContactPopupComponent,
    NatCarriersPopupComponent,
    NatPrivacyPopupComponent,
    NatTermsPopupComponent,
    NatSuccessPopupComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
