import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './header/about-us/about-us.component';
import { ContactUsComponent } from './header/contact-us/contact-us.component';
import { DisclaimerComponent } from './header/disclaimer/disclaimer.component';
import { PrivacyPolicyComponent } from './header/privacy-policy/privacy-policy.component';
import { SearchEngineComponent } from './header/search-engine/search-engine.component';

const routes: Routes = [
  {
    path:'',
    component:SearchEngineComponent
  },
  {
    path:'disclaimer',
    component:DisclaimerComponent
  },
  {
    path:"privacy-policy",
    component:PrivacyPolicyComponent
  },
  {
    path:'contact-us',
    component:ContactUsComponent
  },
  {
    path:'about-us',
    component:AboutUsComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
