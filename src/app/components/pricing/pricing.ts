import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  standalone: true,
  template: `
    <section class="w-full bg-[#F8F9FA] py-24 px-8 antialiased select-none">
      <div class="max-w-6xl mx-auto">


        <div class="text-center mb-16">
          <span class="inline-block px-3 py-1 bg-[#F1E6FA] text-[#6A1B9A] text-xs font-semibold rounded-md mb-4 uppercase tracking-wider">
            Feature
          </span>
          <h2 class="text-4xl md:text-5xl font-bold text-[#111111] tracking-tight mb-4">
            Future banking you need
          </h2>
          <p class="text-gray-500 text-sm max-w-md mx-auto font-medium leading-relaxed">
            Whether you're a small business, or a large corporation, we have a plan that's right for you.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-5 gap-6">

          
          <div class="md:col-span-2 bg-[#F1F3F5] rounded-[28px] p-8 flex flex-col justify-between overflow-hidden min-h-[380px]">
            <div>
              <h3 class="text-2xl font-bold text-[#111111] mb-3">Earn Rewards</h3>
              <p class="text-gray-500 text-xs font-medium leading-relaxed max-w-\[240px\]">
                It costs nothing to pay with PayPal, you'll only be charged a fee when you sell something or request a payment.
              </p>
            </div>

            <div class="flex justify-center mt-6">
              <img src="/regalo.png" alt="Rewards" class="w-40 h-auto object-contain drop-shadow-md">
            </div>
          </div>


          <div class="md:col-span-3 bg-[#E1D3FF] rounded-[28px] p-8 flex flex-col justify-between overflow-hidden min-h-[380px] relative">
            <div>
              <h3 class="text-2xl font-bold text-[#111111] mb-3">Always Protected</h3>
              <p class="text-gray-600 text-xs font-medium leading-relaxed max-w-\[340px\]">
                Shopping with Wishpay is safer with Buyer Protection, 24/7 anti-fraud monitoring and world class security.
              </p>
            </div>

            <div class="mt-6 flex justify-end w-full translate-y-4">
              <img src="/chat.png" alt="Protected Status" class="w-full max-w-\[420px\] h-auto object-contain shadow-xl rounded-t-xl">
            </div>
          </div>


          <div class="md:col-span-3 bg-[#1C0030] rounded-[28px] p-8 flex flex-col justify-between overflow-hidden min-h-[380px] text-white">
            <div>
              <h3 class="text-2xl font-bold text-white mb-3">No asset volatility</h3>
              <p class="text-purple-200/60 text-xs font-medium leading-relaxed max-w-\[280px\]">
                Generate returns on your cash reserves without making any investments.
              </p>
            </div>

            <div class="mt-6 flex justify-center w-full translate-y-8">
              <img src="/icono2.png" alt="Financial Balance Chart" class="w-full max-w-\[440px\] h-auto object-contain rounded-t-xl">
            </div>
          </div>


          <div class="md:col-span-2 bg-[#F1F3F5] rounded-[28px] p-8 flex flex-col justify-between overflow-hidden min-h-[380px]">
            <div>
              <h3 class="text-2xl font-bold text-[#111111] mb-3">Get paid faster</h3>
              <p class="text-gray-500 text-xs font-medium leading-relaxed max-w-\[240px\]">
                Create flexible, scalable subscription plans and streamline billing.
              </p>
            </div>
            <!-- Ilustración de la Interfaz del Teléfono Móvil -->
            <div class="flex justify-center mt-6 translate-y-12">
              <img src="/icon3.png" alt="Mobile Payment View" class="w-48 h-auto object-contain drop-shadow-lg">
            </div>
          </div>

        </div>

      </div>
    </section>
  `
})
export class PricingComponent {}
