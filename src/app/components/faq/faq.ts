import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  template: `
    <section class="w-full bg-gradient-to-br from-[#1C0030] via-[#240046] to-[#11001C] py-24 px-8 md:px-16 text-white antialiased select-none min-h-[600px] flex items-center">
      <div class="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">


        <div class="space-y-6 max-w-lg">
          <span class="inline-block px-3 py-1 bg-white/10 text-purple-300 text-xs font-semibold rounded-md uppercase tracking-wider">
            Integration
          </span>

          <h2 class="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Shop everywhere, <br> anywhere
          </h2>

          <p class="text-purple-200/60 text-sm font-medium leading-relaxed">
            It's now a lot easier to pay someone. All you need is an email address to send cross-border commercial payments in over 25 currencies to almost anyone, anywhere.
          </p>

          <div class="pt-4">
            <button class="bg-white hover:bg-purple-100 text-[#1A0033] font-semibold text-sm px-8 py-3.5 rounded-full transition-all shadow-md active:scale-95">
              Explore More
            </button>
          </div>
        </div>

        <div class="flex justify-center lg:justify-end items-center w-full">
          <div class="grid grid-cols-3 gap-4 max-w-\[460px] w-full">

            <div class="space-y-4 flex flex-col justify-center">

              <div class="bg-white/5 border border-white/10 rounded-[22px] p-5 flex flex-col items-center justify-center text-center aspect-square shadow-lg">
                <img src="/mail.png" alt="Emailing" class="w-8 h-8 object-contain mb-3 opacity-90">
                <span class="text-xs font-medium text-gray-300">Emailing</span>
              </div>

              <div class="bg-white/5 border border-white/10 rounded-[22px] p-5 flex flex-col items-center justify-center text-center aspect-square shadow-lg">
                <img src="/storage.png" alt="Storage" class="w-8 h-8 object-contain mb-3 opacity-90">
                <span class="text-xs font-medium text-gray-300">Storage</span>
              </div>
            </div>


            <div class="space-y-4">

              <div class="bg-white/5 border border-white/10 rounded-[22px] p-5 flex flex-col items-center justify-center text-center aspect-square shadow-lg">
                <img src="/discord.png" alt="Voicemail" class="w-8 h-8 object-contain mb-3 opacity-90">
                <span class="text-xs font-medium text-gray-300">Voicemail</span>
              </div>

              <div class="bg-white/5 border border-white/10 rounded-[22px] p-5 flex flex-col items-center justify-center text-center aspect-square shadow-lg">
                <img src="/billint.png" alt="Billing" class="w-8 h-8 object-contain mb-3 opacity-90">
                <span class="text-xs font-medium text-gray-300">Billing</span>
              </div>

              <div class="bg-white/5 border border-white/10 rounded-[22px] p-5 flex flex-col items-center justify-center text-center aspect-square shadow-lg">
                <img src="/manage.png" alt="Manage" class="w-8 h-8 object-contain mb-3 opacity-90">
                <span class="text-xs font-medium text-gray-300">Manage</span>
              </div>
            </div>


            <div class="space-y-4 flex flex-col justify-center">

              <div class="bg-white/5 border border-white/10 rounded-[22px] p-5 flex flex-col items-center justify-center text-center aspect-square shadow-lg">
                <img src="/textil.png" alt="textil.png" class="w-8 h-8 object-contain mb-3 opacity-90">
                <span class="text-xs font-medium text-gray-300">Texting</span>
              </div>

              <div class="bg-white/5 border border-white/10 rounded-[22px] p-5 flex flex-col items-center justify-center text-center aspect-square shadow-lg">
                <img src="/marquetin.png" alt="Marketing" class="w-8 h-8 object-contain mb-3 opacity-90">
                <span class="text-xs font-medium text-gray-300">Marketing</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  `
})
export class FaqComponent {}
