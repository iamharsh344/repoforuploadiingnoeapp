<template>
    <footer class="bg-gray-950 text-white py-8 px-6">
  <!-- <FloatingDiscordWidget /> -->
  <chatWidget />


  <div class="container mx-auto text-center">
    <div class="flex justify-center items-center mb-4">
      <div class="fox-logo w-14 h-14 rounded-full flex items-center justify-center">
        <img src="/logo/SilverFoxLogo.webp" srcset="/logo/SilverFoxLogo.webp 1x, /logo/SilverFoxLogo_2x.webp 2x" class="w-[56px] h-[56px]" alt="SilverFoxValues" width="56" height="56">
      </div>
      <h1 class="text-2xl font-bold">SilverFoxValues</h1>
    </div>
    
    <p class="text-gray-300 mb-4">
      <a href="mailto:support@silverfoxvalues.com" class="text-blue-400 hover:text-blue-300">support@silverfoxvalues.com</a>
    </p>

    <div class="flex justify-center space-x-6 mb-4">
      <nuxt-link to="/about-us" class="text-gray-300 hover:text-white transition-colors duration-200">About Us</nuxt-link>
      <nuxt-link to="/blogs" class="text-gray-300 hover:text-white transition-colors duration-200">Blogs</nuxt-link>
      <nuxt-link to="/privacy-policy" class="text-gray-300 hover:text-white transition-colors duration-200">Privacy Policy</nuxt-link>
      <nuxt-link to="/terms-and-conditions" class="text-gray-300 hover:text-white transition-colors duration-200">Terms & Conditions</nuxt-link>
    </div>

    <p class="text-gray-400 text-sm mt-4">
      © 2025 SilverFoxValues. All rights reserved.
    </p>
  </div>
</footer>

</template>