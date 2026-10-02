import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { FeaturesComponent } from './components/features/features';
import { PricingComponent } from './components/pricing/pricing';
import { FaqComponent } from './components/faq/faq';
import { FooterComponent } from './components/footer/footer';
import { FooterLinksComponent } from './components/footer-links/footer-links';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Navbar,
    HeroComponent,
    FeaturesComponent,
    PricingComponent,
    FeaturesComponent,
    FaqComponent,
    FooterComponent,
    FooterLinksComponent
],
  styles: [],
  template: `
    <div class="min-h-screen bg-[#F8F9FA] text-gray-900 antialiased">

      <app-navbar></app-navbar>
      <app-hero></app-hero>
      <app-features></app-features>
      <app-pricing></app-pricing>
      <app-faq></app-faq>
      <app-footer></app-footer>
      <app-footer-links></app-footer-links>
      <router-outlet />
    </div>
  `
})
export class App {
  protected readonly title = signal('wishpay');
}
