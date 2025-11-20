<template>
    <div class="bg-darker-bg min-h-screen text-text-primary">
        <MainHeader />
      <div class="bg-dark-bg px-6 py-4 pt-[6rem]">
        <div class="max-w-7xl mx-auto flex justify-between">
            <div>
                <h1 class="text-2xl font-bold text-white">GAG Live Stock</h1>
                <p class="text-text-secondary text-sm mt-2">Last updated: {{ lastUpdated }}</p>
            </div>
            <div class="flex items-center">
                <button @click="refreshData" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm">
                    Refresh
                </button>
            </div>
        </div>
      </div>
  
      <main class="max-w-7xl mx-auto px-6 py-8">
        <div v-if="error" class="bg-red-600/20 border border-red-600 rounded-lg p-4 mb-6">
          <p class="text-red-400">{{ error.message }}</p>
        </div>
  
        <div v-if="loading" class="text-center py-8">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-accent mx-auto"></div>
          <p class="mt-4 text-text-secondary">Loading stock data...</p>
        </div>
  
        <div v-else class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          <div 
            v-for="(category, categoryName) in stockData"
            v-show="categoryName != 'updated_at'" 
            :key="categoryName"
            class="bg-card-bg rounded-lg border border-gray-600 p-6"
          >
            <div class="flex items-center space-x-3 mb-6">
              <div 
                class="w-10 h-10 rounded-lg flex items-center justify-center"
                :class="getCategoryColor(categoryName)"
              >
                <span class="text-xl">{{ getCategoryEmoji(categoryName) }}</span>
              </div>
              <h2 
                class="text-xl font-bold"
                :class="getCategoryTextColor(categoryName)"
              >
                {{ getCategoryTitle(categoryName) }}
              </h2>
            </div>
            
            <div 
              class="space-y-3"
            >
              <div 
                v-for="(item, index) in category.items" 
                :key="index"
                class="flex justify-between items-center p-3 bg-darker-bg rounded border border-gray-700"
              >
                <div class="flex items-center space-x-3">
                  <span>{{ item.emoji }}</span>
                  <span class="text-sm">{{ item.name }}</span>
                </div>
                <span 
                  class="font-bold"
                  :class="getCategoryTextColor(categoryName)"
                >
                  ×{{ item.quantity }}
                </span>
              </div>
            </div>
              
            <div v-if="categoryName === 'travelingmerchant' && category.merchantName" class="mt-4 p-3 bg-amber-500/20 rounded border border-amber-500/50">
              <div class="flex items-center justify-between">
                <span class="text-amber-400 text-sm font-medium">{{ category.merchantName }}</span>
                <span class="text-amber-400 text-sm">{{ category.status }}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <mainFooter />
    </div>
  </template>
  
  <script>
  export default {
    setup() {
    useHead({
        title: 'Live Stock - Grow a Garden | SilverFoxValues',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { name: 'google-adsense-account', content: 'ca-pub-2625601725317470' },
            { name: 'robots', content: 'index,follow' },
            { hid: 'description', name: 'description', content: 'Check the latest live stock values for pets, plants, gears and more from the Roblox game Grow a Garden. Updated regularly by SilverFox Values.' },
            { hid: 'keywords', name: 'keywords', content: 'Grow a Garden, Grow a Garden values, Grow a Garden Roblox, live stock gag, grow a garden live stock, gag live stock, Grow a Garden trading, Roblox garden game' },
            { name: 'author', content: 'SilverFoxValues' },
            
            { hid: 'og:type', property: 'og:type', content: 'website' },
            { hid: 'og:title', property: 'og:title', content: 'Live Stock - Grow a Garden | SilverFoxValues' },
            { hid: 'og:description', property: 'og:description', content: 'Check the latest live stock values for pets, plants, gears and more from the Roblox game Grow a Garden. Updated regularly by SilverFox Values.' },
            { hid: 'og:url', property: 'og:url', content: 'https://silverfoxvalues.com/growagarden/crops/' },
            
            { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
            { hid: 'twitter:title', name: 'twitter:title', content: 'Live Stock - Grow a Garden | SilverFoxValues' },
            { hid: 'twitter:description', name: 'twitter:description', content: 'Check the latest live stock values for pets, plants, gears and more from the Roblox game Grow a Garden.' }
        ]
    })
},
    data() {
      return {
        stockData: [],
        lastUpdated: '',
        connectionStatus: 'Connected',
        loading: false,
        error: null
      }
    },
  
    mounted() {
      this.gagData()
      this.startAutoRefresh()
    },
  
    beforeUnmount() {
      if (this.refreshInterval) {
        clearInterval(this.refreshInterval)
      }
    },
  
    methods: {
      async gagData() {
        this.loading = true
        this.error = null
        try {
          const response = await $fetch('/api/gag-live-stock')
          
            this.stockData = response.data
            this.lastUpdated = new Date().toLocaleString()

        } catch (error) {
          this.error = {
            message: error.message || 'Failed to fetch stock data'
          }
          
        } finally {
          this.loading = false
        }
      },
  
      refreshData() {
        this.gagData()
      },
  
      startAutoRefresh() {
        this.refreshInterval = setInterval(() => {
          this.gagData()
        }, 30000)
      },
  
      getCategoryColor(category) {
        const colors = {
          egg: 'bg-yellow-500',
          gear: 'bg-blue-500',
          seed: 'bg-green-500',
          honey: 'bg-amber-500',
          cosmetics: 'bg-pink-500',
          travelingmerchant: 'bg-purple-500'
        }
        return colors[category] || 'bg-gray-500'
      },
  
      getCategoryTextColor(category) {
        const colors = {
          egg: 'text-yellow-400',
          gear: 'text-blue-400',
          seed: 'text-green-400',
          honey: 'text-amber-400',
          cosmetics: 'text-pink-400',
          travelingmerchant: 'text-purple-400'
        }
        return colors[category] || 'text-gray-400'
      },
  
      getCategoryEmoji(category) {
        const emojis = {
          egg: '🥚',
          gear: '⚙️',
          seed: '🌱',
          honey: '🍯',
          cosmetics: '💄',
          travelingmerchant: '🛒'
        }
        return emojis[category] || '📦'
      },
  
      getCategoryTitle(category) {
        const titles = {
          egg: 'Egg',
          gear: 'Gear',
          seed: 'Seed',
          honey: 'Honey',
          cosmetics: 'Cosmetics',
          travelingmerchant: 'Traveling Merchant'
        }
        return titles[category] || category.charAt(0).toUpperCase() + category.slice(1)
      }
    }
  }
  </script>
  
  <style>
  .bg-darker-bg { background-color: #0f1629; }
  .bg-dark-bg { background-color: #16213e; }
  .bg-card-bg { background-color: #1e2746; }
  .bg-purple-accent { background-color: #8b5cf6; }
  .text-text-primary { color: #e2e8f0; }
  .text-text-secondary { color: #94a3b8; }
  .text-purple-accent { color: #8b5cf6; }
  </style>
  