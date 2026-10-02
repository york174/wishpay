import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: true,
  template: `
    <section class="w-full bg-[#F8F9FA] py-24 px-8 antialiased select-none">
      <div class="max-w-6xl mx-auto">

        <div class="mb-16">
          <span class="inline-block px-3 py-1 bg-[#F1E6FA] text-[#6A1B9A] text-xs font-semibold rounded-md mb-4 uppercase tracking-wider">
            Our values
          </span>
          <h2 class="text-4xl md:text-5xl font-bold text-[#111111] tracking-tight mb-4">
            The strategic choice
          </h2>
          <p class="text-gray-500 text-sm max-w-sm font-medium leading-relaxed">
            We're on a mission to bring transparency to finance and show you upfront.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center relative mt-12">


          <div class="space-y-20 lg:text-left z-10">

            <div class="max-w-xs">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B1FA2] to-[#6A1B9A] shadow-md flex items-center justify-center p-2.5 mb-4">
                <img src="/seguridad.png" alt="Security" class="w-full h-full object-contain">
              </div>
              <h4 class="text-lg font-bold text-[#111111] mb-2">Security Teams</h4>
              <p class="text-gray-400 text-xs font-medium leading-relaxed">
                Security teams work to keep your money safe
              </p>
            </div>


            <div class="max-w-xs">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B1FA2] to-[#6A1B9A] shadow-md flex items-center justify-center p-2.5 mb-4">
                <img src="/banco.png" alt="Safety" class="w-full h-full object-contain">
              </div>
              <h4 class="text-lg font-bold text-[#111111] mb-2">Safety Funds</h4>
              <p class="text-gray-400 text-xs font-medium leading-relaxed">
                Hold money with established financial institutions
              </p>
            </div>
          </div>


          <div class="flex justify-center items-center py-8 lg:py-0 select-none pointer-events-none">
            <div class="w-64 h-96 bg-gradient-to-b from-[#1C0030] to-[#2E0854] rounded-[24px] shadow-2xl p-6 text-white transform rotate-[15deg] transition-transform duration-500 hover:rotate-[10deg] flex flex-col justify-between relative overflow-hidden border border-[#4A148C]/40">


              <div class="flex flex-col items-start gap-1 mt-4">
                <div class="w-12 h-9 bg-gradient-to-br from-amber-200 to-amber-400/80 rounded-md border border-amber-300/50 shadow-inner"></div>
                <span class="text-white/40 text-[10px] tracking-widest font-mono ml-1">📶</span>
              </div>


              <div class="absolute bottom-0 left-0 w-full h-1/3 bg-[#7B2CBF] rounded-t-[40px] transform translate-y-4 flex items-center justify-center p-6">

                <div class="flex flex-col gap-1.5 transform -rotate-[15deg]">
                  <span class="w-8 h-1 bg-white/90 rounded-full"></span>
                  <span class="w-8 h-1 bg-white/60 rounded-full translate-x-1"></span>
                  <span class="w-8 h-1 bg-white/90 rounded-full"></span>
                </div>
              </div>
            </div>
          </div>


          <div class="space-y-20 lg:text-left lg:pl-12 z-10">

            <div class="max-w-xs">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B1FA2] to-[#6A1B9A] shadow-md flex items-center justify-center p-2.5 mb-4">
                <img src="/cuenta.png" alt="Authentication" class="w-full h-full object-contain">
              </div>
              <h4 class="text-lg font-bold text-[#111111] mb-2">Authentication</h4>
              <p class="text-gray-400 text-xs font-medium leading-relaxed">
                We use top uthentication to protect your account
              </p>
            </div>


            <div class="max-w-xs">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B1FA2] to-[#6A1B9A] shadow-md flex items-center justify-center p-2.5 mb-4">
                <img src="/cara.png" alt="Account Place" class="w-full h-full object-contain">
              </div>
              <h4 class="text-lg font-bold text-[#111111] mb-2">Account Place</h4>
              <p class="text-gray-400 text-xs font-medium leading-relaxed">
                Place all your account, all in one place
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  `
})
export class FeaturesComponent {}
