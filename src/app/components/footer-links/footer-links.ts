import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-links',
  standalone: true,
  template: `
    <footer class="w-full bg-[#F8F9FA] pt-20 pb-8 px-6 md:px-12 antialiased select-none">
      <div class="max-w-6xl mx-auto">


        <div class="w-full bg-[#240046] rounded-[32px] p-12 md:p-20 text-center relative overflow-hidden mb-20 shadow-xl">

          <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-24 md:w-32 h-auto select-none pointer-events-none">
            <img src="/moneda.png" alt="Coin decoration" class="w-full h-auto object-contain drop-shadow-2xl">
          </div>

          <div class="absolute left-0 bottom-0 w-24 h-40 bg-[#7B2CBF]/30 rounded-r-[40px] transform -translate-x-6 rotate-12"></div>
          <div class="absolute right-0 bottom-0 w-32 h-36 bg-[#E0D4F7]/10 rounded-l-[40px] transform translate-x-6 -rotate-12"></div>


          <div class="relative z-10 max-w-2xl mx-auto mt-4">
            <h2 class="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
              Simplify payments <br> management
            </h2>
            <p class="text-purple-200/60 text-xs md:text-sm font-medium leading-relaxed max-w-sm mx-auto mb-8">
              Easy and fast international business account that saves you money wherever you want to use it.
            </p>
            <button class="bg-white text-[#240046] font-semibold text-xs px-8 py-3.5 rounded-full shadow-md">
              Start Now
            </button>
          </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-200/60 pb-16 text-sm">


          <div>
            <h4 class="font-bold text-[#111111] mb-4">Account</h4>
            <ul class="space-y-3 text-gray-400 font-medium text-xs">
              <li>Saving</li>
              <li>Join Accounts</li>
              <li>Crypto</li>
              <li>Freelance</li>
              <li>Commodities</li>
            </ul>
          </div>


          <div>
            <h4 class="font-bold text-[#111111] mb-4">Help</h4>
            <ul class="space-y-3 text-gray-400 font-medium text-xs">
              <li>Customer Help</li>
              <li>Community</li>
              <li>Blog</li>
            </ul>
          </div>


          <div>
            <h4 class="font-bold text-[#111111] mb-4">Finance</h4>
            <ul class="space-y-3 text-gray-400 font-medium text-xs">
              <li>Cards</li>
              <li>Linked Accounts</li>
              <li>Payment</li>
            </ul>
          </div>


          <div>
            <h4 class="font-bold text-[#111111] mb-4">Company</h4>
            <ul class="space-y-3 text-gray-400 font-medium text-xs">
              <li>About Us</li>
              <li>Contact</li>
              <li>Sustainability</li>
              <li>Career</li>
            </ul>
          </div>


          <div>
            <h4 class="font-bold text-[#111111] mb-4">Follow Us</h4>

          </div>

        </div>


        <div class="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-medium text-gray-400">
          <div>
            ©2026 Wishpay Finance Technology, Inc.
          </div>


          <div class="flex items-center gap-1.5 text-sm font-bold text-[#111111]">
            <img src="/logo2.png" alt="Wishpay" class="h-4 w-auto object-contain">
            <span>Wishpay</span>
          </div>

          <div class="flex items-center space-x-6">
            <a>Privacy Policy</a>
            <a>Terms of use</a>
            <a>Disclosure</a>
          </div>
        </div>

      </div>
    </footer>
  `
})
export class FooterLinksComponent {}
