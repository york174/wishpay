import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="w-full min-h-[85vh] bg-[#F8F9FA] relative overflow-hidden flex flex-col justify-between px-6 pt-12 pb-8 antialiased">

      <div class="max-w-4xl mx-auto text-center mt-8 relative z-10">

        <h1 class="text-6xl md:text-7xl font-bold text-[#111111] tracking-tight leading-[1.15] mb-6 select-none">
          Enhance


          <span class="inline-flex items-center align-middle mx-2">
            <img src="/logo2.png" alt="Logo Wishpay" class="h-12 md:h-16 w-auto object-contain transform rotate-6">
          </span>
          your
          <br>

         
          <span class="inline-block relative">
            <!-- 2. IMAGEN DE LA TARJETA INCLINADA -->
            <span class="absolute -left-28 top-2 hidden md:block">
              <img src="/targeta.png" alt="Tarjeta Wishpay" class="w-24 h-auto object-contain transform -rotate-12 drop-shadow-md">
            </span>
            Financial
          </span>
          <br>

          with
          <span class="text-[#6A1B9A] relative inline-block">
            Wishpay
            <span class="absolute left-0 bottom-2 w-full h-[3px] bg-[#6A1B9A]/30"></span>
          </span>
        </h1>

        <p class="text-gray-500 text-sm md:text-base font-medium max-w-md mx-auto leading-relaxed mt-8">
          Moving money should never take more than a few taps. Transfers are always free between friends.
        </p>

        <div class="mt-8">
          <button class="bg-[#1A0033] hover:bg-[#311B92] text-white font-semibold text-sm px-8 py-3.5 rounded-full transition-all shadow-md hover:shadow-lg active:scale-95">
            Send Money Now
          </button>
        </div>
      </div>

      <div class="absolute left-0 top-1/3 flex items-center select-none pointer-events-none">
        <div class="w-16 h-36 bg-[#311B92] rounded-r-3xl"></div>
        <div class="w-28 h-28 bg-[#222222] rounded-full shadow-2xl border-4 border-gray-400 flex items-center justify-center -ml-10 transform rotate-12">
          <span class="text-gray-400 text-4xl font-bold">$</span>
        </div>
      </div>

      <div class="absolute right-0 top-1/3 flex items-center select-none pointer-events-none">
        <div class="w-24 h-24 bg-[#2C3E50] rounded-2xl shadow-2xl transform -rotate-12 p-3 flex flex-col justify-between -mr-4 border border-gray-700">
          <div class="w-full h-4 bg-gray-800 rounded"></div>
          <div class="text-right text-xs font-mono text-gray-400">•••</div>
        </div>
        <div class="w-16 h-40 bg-[#E0D4F7] rounded-l-3xl -z-10 -ml-12"></div>
      </div>

      <div class="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-8 border-t border-gray-100 pt-10 mt-16 relative z-10">

        <div class="text-center md:text-left pl-4">
          <span class="text-xs font-medium text-gray-400 block mb-1">Satisfied users globally</span>
          <span class="text-5xl font-bold text-[#111111] tracking-tight">75K+</span>
        </div>

        <div class="flex items-center justify-center space-x-8 text-gray-400 font-semibold text-sm">
          <span class="flex items-center gap-1 hover:text-gray-600 transition-colors cursor-default">
             OpenAI
          </span>
          <span class="flex items-center gap-1 hover:text-gray-600 transition-colors cursor-default">
             Raycast
          </span>
          <span class="flex items-center gap-1 hover:text-gray-600 transition-colors cursor-default">
             ramp
          </span>
        </div>

        <div class="text-center md:text-right pr-4">
          <span class="text-xs font-medium text-gray-400 block mb-1">Benefical User Cashback</span>
          <span class="text-5xl font-bold text-[#111111] tracking-tight">92%</span>
        </div>

      </div>

    </section>
  `
})
export class HeroComponent {}
