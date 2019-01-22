import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import 'hammerjs';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/tri-header.component';
import { NavComponent } from './navigation/tri-nav.component';
import { DetailComponent } from './detail/tri-detail.component';
import { GalleryComponent } from './gallery/tri-gallery.component';
import { CtaComponent } from './cta/tri-cta.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        NavComponent,
        GalleryComponent,
        DetailComponent,
        CtaComponent
    ],
    imports: [BrowserModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
