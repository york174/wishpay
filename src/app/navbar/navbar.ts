import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-navbar',
  styles: ``,
    template: `
    <nav class="w-full bg-[#F8F9FA] px-8 py-5 flex items-center justify-between max-w-7xl mx-auto antialiased select-none">


      <div  img="header_logo.jpg">
        <span a class="text-xl font-bold text-[#111111] tracking-tight ml-1">
          Wishpay
        </span>
      </div>

      <div class="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
        <a>Personal</a>
        <a>Business</a>
        <a>Enterprise</a>
        <a>Developer</a>
      </div>


      <div class="flex items-center space-x-3 text-sm font-medium">

        <button class="px-5 py-2 text-[#111111] bg-white border border-gray-300 rounded-full hover:bg-gray-50 hover:border-gray-400 transition-all active:scale-95">
          Login
        </button>

        <button class="px-5 py-2 text-white bg-[#1A0033] rounded-full hover:bg-[#311B92] transition-all shadow-sm hover:shadow active:scale-95">
          Sign Up
        </button>
      </div>

    </nav>
  `
})

export class Navbar {}
