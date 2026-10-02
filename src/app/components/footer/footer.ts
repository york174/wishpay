import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <section class="w-full bg-[#F8F9FA] py-24 px-8 antialiased select-none">
      <div class="max-w-6xl mx-auto">

   
        <div class="text-center mb-16">
          <span class="inline-block px-3 py-1 bg-[#F1E6FA] text-[#6A1B9A] text-xs font-semibold rounded-md mb-4 uppercase tracking-wider">
            Pricing
          </span>
          <h2 class="text-4xl md:text-5xl font-bold text-[#111111] tracking-tight mb-4">
            Plans for every budget
          </h2>
          <p class="text-gray-500 text-sm max-w-md mx-auto font-medium leading-relaxed">
            Whether you're a small business, or a large corporation, we have a plan that's right for you.
          </p>
        </div>


        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mb-32">


          <div class="bg-[#D6C4FF] rounded-[28px] p-10 flex flex-col justify-between min-h-[380px]">
            <div class="space-y-4">
              <h3 class="text-2xl md:text-3xl font-bold text-[#1A0033]">Personal</h3>
              <p class="text-[#1A0033]/70 text-xs font-medium leading-relaxed max-w-[220px]">
                Built-in budgeting and get more from your money with our Standard account.
              </p>
            </div>

            <div class="mt-8">
              <div class="flex items-baseline mb-6">
                <span class="text-4xl font-bold text-[#1A0033]">$5</span>
                <span class="text-[#1A0033]/60 text-xs font-medium ml-1">/ month</span>
              </div>
              <button class="w-full bg-[#1A0033] text-white font-semibold text-xs py-4 rounded-full">
                Try for Free
              </button>
            </div>
          </div>

          <div class="lg:col-span-2 bg-[#1A0033] rounded-[28px] p-10 text-white grid grid-cols-1 md:grid-cols-2 gap-8 items-center">


            <div class="flex flex-col justify-between h-full min-h-[260px]">
              <div class="space-y-4">
                <h3 class="text-2xl md:text-3xl font-bold text-white">Business</h3>
                <p class="text-purple-200/60 text-xs font-medium leading-relaxed max-w-[200px]">
                  Give your everyday finances a boost. Get more out of your money for less.
                </p>
              </div>

              <div class="mt-8">
                <div class="flex items-baseline mb-6">
                  <span class="text-4xl font-bold text-white">$20</span>
                  <span class="text-purple-200/50 text-xs font-medium ml-1">/ month</span>
                </div>
                <button class="w-full bg-white text-[#1A0033] font-semibold text-xs py-4 rounded-full">
                  Get Started
                </button>
              </div>
            </div>


            <div class="border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8 space-y-5 h-full flex flex-col justify-center">
              <span class="text-[10px] font-bold text-purple-300 uppercase tracking-widest block mb-1">Features</span>

              <div class="flex items-start gap-2.5 text-xs font-medium text-purple-100">
                <span class="text-purple-400 mt-0.5">✓</span>
                <p>No payments back-office needed</p>
              </div>
              <div class="flex items-start gap-2.5 text-xs font-medium text-purple-100">
                <span class="text-purple-400 mt-0.5">✓</span>
                <p>Faster implementation and global roll-out</p>
              </div>
              <div class="flex items-start gap-2.5 text-xs font-medium text-purple-100">
                <span class="text-purple-400 mt-0.5">✓</span>
                <p>48 hour support response time</p>
              </div>
              <div class="flex items-start gap-2.5 text-xs font-medium text-purple-100">
                <span class="text-purple-400 mt-0.5">✓</span>
                <p>Always benefit from the best rates and features</p>
              </div>
            </div>

          </div>
        </div>

        <div class="max-w-3xl mx-auto mt-24">
          <h2 class="text-3xl font-bold text-center text-[#111111] tracking-tight mb-12">FAQ</h2>

          <div class="space-y-4">


            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div class="w-full px-6 py-5 flex items-center justify-between text-left">
                <span class="text-sm font-bold text-[#111111]">What is Wishpay?</span>
                <span class="text-lg font-bold text-purple-600 ml-4">−</span>
              </div>
              <div class="px-6 pb-5 text-xs font-medium text-gray-400 leading-relaxed border-t border-gray-50 pt-3">
                Wishpay is payment institution that helps millions of people and businesses manage their money across the world. Wishpay helps you get more from your money.
              </div>
            </div>

            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div class="w-full px-6 py-5 flex items-center justify-between text-left">
                <span class="text-sm font-bold text-[#111111]">How do I send money to a bank account?</span>
                <span class="text-lg font-bold text-purple-600 ml-4">+</span>
              </div>
            </div>


            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div class="w-full px-6 py-5 flex items-center justify-between text-left">
                <span class="text-sm font-bold text-[#111111]">What happens when I go over the block limit on my Free plan?</span>
                <span class="text-lg font-bold text-purple-600 ml-4">−</span>
              </div>
              <div class="px-6 pb-5 text-xs font-medium text-gray-400 leading-relaxed border-t border-gray-50 pt-3">
                You can still read your existing content as usual, but you won't be able to add new content. However, you can delete existing blocks to free up space.
              </div>
            </div>
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div class="w-full px-6 py-5 flex items-center justify-between text-left">
                <span class="text-sm font-bold text-[#111111]">How do I verify my identity?</span>
                <span class="text-lg font-bold text-purple-600 ml-4">+</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  `
})
export class FooterComponent {}
