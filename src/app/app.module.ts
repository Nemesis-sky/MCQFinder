import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DisclaimerComponent } from './header/disclaimer/disclaimer.component';
import { PrivacyPolicyComponent } from './header/privacy-policy/privacy-policy.component';
import { ContactUsComponent } from './header/contact-us/contact-us.component';
import { AboutUsComponent } from './header/about-us/about-us.component';
import { SearchEngineComponent } from './header/search-engine/search-engine.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DisclaimerComponent,
    PrivacyPolicyComponent,
    ContactUsComponent,
    AboutUsComponent,
    SearchEngineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
