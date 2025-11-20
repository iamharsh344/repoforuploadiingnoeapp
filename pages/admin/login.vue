<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4">
      <div class="w-full max-w-sm bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl p-8 border border-gray-700">
        <div class="text-center mb-8">
          <div class="bg-white/10 rounded-full p-1 w-16 h-16 mx-auto mb-6 backdrop-blur-sm">
            <img 
              src="/logo/SilverFoxLogo.webp" 
            >
          </div>
          
          <h1 class="text-2xl font-bold text-white mb-2">
            Admin Portal
          </h1>
          <p class="text-gray-400 text-sm opacity-90">
            SilverFoxValues Dashboard
          </p>
        </div>
  
        <form @submit.prevent="handleLogin" class="space-y-5">
            <div v-if="errorMessage" class="mb-4 p-3 bg-red-900/50 border border-red-600 rounded-lg">
                <p class="text-red-300 text-sm">{{ errorMessage }}</p>
            </div>

          <div>
            <label class="block text-gray-300 text-sm font-medium mb-2">
              Username
            </label>
            <div class="relative">
                <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              <input
                id="username"
                v-model="username"
                type="text"
                class="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-all disabled:opacity-50"
                :disabled="isLoading"
                placeholder="Enter your username"
                required
              >
            </div>
          </div>
  
          <div>
            <label class="block text-gray-300 text-sm font-medium mb-2">
              Password
            </label>
            <div class="relative">
                <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              <input
                id="password"
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                required
                class="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-all disabled:opacity-50"
                :disabled="isLoading"
                placeholder="Enter your password"
              >
            </div>
          </div>
  
          <button
            type="submit"
            :disabled="isLoading"
            class="w-full bg-gradient-to-r from-slate-600 to-gray-700 hover:from-slate-700 hover:to-gray-800 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-slate-500 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
            <span v-if="!isLoading">Sign In</span>
            <span v-else class="flex items-center justify-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Signing In...
            </span>
            </button>

        </form>
  
        <div class="mt-8 text-center">
          <p class="text-xs text-gray-500">
            © 2025 SilverFoxValues. Admin access only.
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    setup() {
    useHead({
        title: 'Admin Login - SilverFoxValues',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { name: 'robots', content: 'noindex, nofollow' },
        ]
    })
},
    data() {
      return {
        username: '',
        password: '',
        showPassword: false,
        isLoading: false,
        errorMessage: ''
      }
    },
    methods: {
      togglePassword() {
        this.showPassword = !this.showPassword
      },
      
      async handleLogin() {
        this.isLoading = true
        this.errorMessage = ''
        
        try {
          const response = await fetch('https://api.silverfoxvalues.com/admin/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: this.username.trim(),
              password: this.password.trim()
            })
          })
          
          const data = await response.json()
          
          localStorage.setItem('token', data.token)
          if (!response.ok) {
            throw new Error(data.message || 'Login failed')
          }
          
          if (data.success) {
           this.$router.push('/admin/')
          }
          
        } catch (error) {
          this.errorMessage = error.message || 'An error occurred during login'
        } finally {
          this.isLoading = false
        }
      }
    },
    beforeMount() {
      if(localStorage.getItem('token') == null) {
        return this.$router.push('/admin/login') 
      }
    }
  }
  </script>
  
  