<template>
    <div class="min-h-screen text-white game-body">
      <main-Header />
  
      <div class="pt-32 pb-8 text-center">
        <div class="container mx-auto px-6">
          <h1 class="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Grow a Garden
          </h1>
          <p class="text-xl text-gray-300">Stay updated with the latest item values and trends</p>
        </div>
      </div>
  
      <div class="container mx-auto px-6 mb-8">
        <div class="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div class="flex-1 max-w-md">
            <div class="relative">
              <input 
                type="text" 
                placeholder="Search items..." 
                class="search-bar w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all"
                v-model="searchQuery"
              >
              <i class="fas fa-search absolute right-4 top-4 text-gray-400"></i>
            </div>
          </div>
          
          <div class="flex gap-2 flex-wrap">
            <button 
              v-for="category in categories"
              :key="category.key"
              :class="['filter-btn px-4 py-2 rounded-lg text-sm font-semibold', { 'active': activeCategory === category.key }]"
              @click="setActiveCategory(category.key)"
            >
              {{ category.label }}
            </button>
          </div>
        </div>
      </div>
  
      <div v-show="!isLoaded" class="flex justify-center my-10">
          <loader />
      </div>
      <div class="container mx-auto px-6 pb-12 min-h-[450px]">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div 
            v-for="item in displayedItems"
            :key="item.id"
            class="item-card rounded-xl p-6 relative rarity-rare"
          >
            <div class="absolute top-3 right-3">
              <span class="category-badge text-xs px-2 py-1 rounded-full font-semibold">{{ item.category == 'crops' ? 'Plants' : item.category.charAt(0).toUpperCase() + item.category.slice(1) }}</span>
            </div>
            
            <div class="text-center mb-4">
              <div class="w-24 h-24 mx-auto mb-3 rounded-full flex items-center justify-center">
                <img :alt="item.imageName" :src="`https://storage.silverfoxvalues.com/gag/${item.imageName}`" loading="lazy">
              </div>
              <h3 class="text-lg font-bold text-white">{{ item.name }}</h3>
              <p class="text-sm text-gray-400">{{ item.category == 'crops' ? 'Plants' : item.category.charAt(0).toUpperCase() + item.category.slice(1) }}</p>
            </div>
            
            <div class="space-y-2 mb-4">
                <div class="flex justify-between items-center">
                <span class="text-gray-300 text-sm">Price:</span>
                <span class="value-badge text-sm px-2 py-1 rounded-full font-semibold flex gap-1">
                  <img alt="Sheckle" width="20" height="20" class="w-[20px] h-[20px]" src="/sheckle.webp">
                    {{ item.price.toUpperCase() }}
                </span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-300 text-sm">Robux:</span>
                <span class="text-base px-2 py-1 rounded-full font-semibold">{{ item.robux }}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-300 text-sm">Multi-Harvest:</span>
                <span class="text-base px-2 py-1 rounded-full font-semibold">{{ item.multiHarvest.toUpperCase() }}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-300 text-sm">Demand:</span>
                <span class="text-base px-2 py-1 rounded-full font-semibold">{{ item.demand }}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-300 text-sm">Trend:</span>
                <span :class="getTrendClass(item.trend)" class="flex items-center">
                    <svg :class="getTrendIcon(item.trend)" class="mr-1 w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path :d="getTrendIconPath(item.trend)"></path>
                    </svg>
                    {{ item.trend }}
                </span>
              </div>
            </div>
            
            <button 
              class="details-btn w-full py-2 rounded-lg font-semibold text-white" 
              @click="showModal(item._id)"
            >
              View Details
            </button>
          </div>
        </div>
        <div ref="scrollTrigger" class="h-4"></div>
      </div>
  
      <main-footer />

      <div 
        v-if="showItemModal" 
        class="modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4"
        @click="hideModal"
      >
        <div class="modal-content rounded-xl max-w-lg w-full p-6 relative" @click.stop>
          <button class="absolute top-4 right-4 text-gray-400 hover:text-white text-xl" @click="hideModal">
            <i class="fas fa-times"></i>
          </button>
          
          <div v-if="selectedItem">
            <div class="text-center mb-6">
              <div class="flex justify-end">
                <svg @click="hideModal" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m8.4 17l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6zm3.6 5q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"/></svg>
              </div>
              <div class="mb-4 flex justify-center">
                <img :alt="selectedItem.imageName" class="w-24 h-24" :src="`https://storage.silverfoxvalues.com/gag/${selectedItem.imageName}`">
              </div>
              <h2 class="text-2xl font-bold text-white mb-2">{{ selectedItem.name }}</h2>
              <div class="flex justify-center items-center space-x-2 mb-4">
                <span class="bg-purple-600 text-xs px-2 py-1 rounded-full">{{ selectedItem.category == 'crops' ? 'Plants' : selectedItem.category.charAt(0).toUpperCase() + selectedItem.category.slice(1) }}</span>
              </div>
            </div>
            
            <div class="space-y-4">
              <div>
                <h3 class="font-semibold text-white mb-2">Current Price</h3>
                <div class="flex justify-between items-center bg-gray-800 rounded-lg p-3">
                  <span class="text-green-400 font-bold text-lg">
                    {{ selectedItem.price.toUpperCase() }}
                </span>
                <span :class="getTrendClass(selectedItem.trend)" class="flex items-center">
                    <svg :class="getTrendIcon(selectedItem.trend)" class="mr-1 w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path :d="getTrendIconPath(selectedItem.trend)"></path>
                    </svg>
                    {{ selectedItem.trend }}
                </span>
                </div>
              </div>
              
              <div>
                <h3 class="font-semibold text-white mb-2">Description</h3>
                <p class="text-gray-300 text-sm leading-relaxed">{{ selectedItem.description }}</p>
              </div>

              <div>
                <h3 class="font-semibold text-white mb-2">Stats</h3>
                <div class="flex justify-between items-center">
                    <span class="text-gray-300">Robux: </span>
                    <span class="text-white">{{ selectedItem.robux }}</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="text-gray-300">Demand: </span>
                    <span class="text-white">{{ selectedItem.demand }}</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="text-gray-300">Multi-Harvest: </span>
                    <span class="text-white">{{ selectedItem.multiHarvest }}</span>
                </div>
              </div>

              <div class="border-t border-gray-600 pt-4">
                <p class="text-gray-400 text-xs mb-2"> 
                    {{ (() => {
                        if (!selectedItem.lastUpdated) return '';
                        const now = new Date();
                        const date = new Date(selectedItem.lastUpdated);
                        const diffInMs = now - date;
                        const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
                        const diffInHours = Math.floor(diffInMinutes / 60);
                        const diffInDays = Math.floor(diffInHours / 24);
                        
                        if (diffInMinutes < 1) return 'Just now';
                        if (diffInMinutes < 60) return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
                        if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
                        if (diffInDays < 7) return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
                        
                        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
                    })() }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
<script>
export default {
setup() {
    useHead({
        title: 'Grow a Garden Values | Crops - SilverFoxValues',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { name: 'google-adsense-account', content: 'ca-pub-2625601725317470' },
            { name: 'robots', content: 'index,follow' },
            { hid: 'description', name: 'description', content: 'Accurately track weekly updated item, crop, and pet values for Grow a Garden on Roblox. Stay ahead in trading and know what your items are worth!' },
            { hid: 'keywords', name: 'keywords', content: 'Grow a Garden, Grow a Garden values, Grow a Garden Roblox, pet values, item values, gag values, Grow a Garden trading, gag crops value, crops values' },
            { name: 'author', content: 'SilverFoxValues' },
            
            { hid: 'og:type', property: 'og:type', content: 'website' },
            { hid: 'og:title', property: 'og:title', content: 'Grow a Garden Values | Roblox Pets & Items | SilverFoxValues' },
            { hid: 'og:description', property: 'og:description', content: 'Stay updated with the most accurate Grow a Garden Roblox values. Discover the latest pet, item, and crop prices updated weekly.' },
            { hid: 'og:url', property: 'og:url', content: 'https://silverfoxvalues.com/growagarden/crops/' },
            
            { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
            { hid: 'twitter:title', name: 'twitter:title', content: 'Grow a Garden Roblox – Weekly Pet, Crop & Item Values' },
            { hid: 'twitter:description', name: 'twitter:description', content: 'Track trusted weekly values of Grow a Garden items and pets. Make better trades on Roblox using SilverFoxValues.' }
        ]
    })
},
data() {
    return {
      searchQuery: '',
      activeCategory: 'all',
      showItemModal: false,
      selectedItem: null,

      isLoaded: false,

      items: [],
      categories: [
          { key: '/plants', label: 'Plant' },
          { key: '/gears', label: 'Gear' },
          { key: '/pets', label: 'Pet' }
      ],

      // Infinite scroll
      displayedItems: [],
      itemsPerPage: 20, // Good for grid layouts (divisible by 2,3,4)
      currentPage: 1,
      loading: false,
      observer: null,
      searchTimeout: null
    }
},
watch: {
  activeCategory() {
    this.resetAndReload()
  },
  
  searchQuery() {
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout)
    }
    
    this.searchTimeout = setTimeout(() => {
      this.resetAndReload()
    }, 300)
  }
},
computed: {
    filteredItems() {
    let filtered = this.items;
    
    if (this.activeCategory !== 'all') {
        filtered = filtered.filter(item => item.category === this.activeCategory);
    }
    
    if (this.searchQuery) {
        filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
    }
    
    return filtered;
    },
    hasReachedEnd() {
      return this.displayedItems.length >= this.filteredItems.length;
    }
},
methods: {
    setActiveCategory(category) {
        this.$router.push('/growagarden'+category)
    },
    showModal(itemId) {
        this.selectedItem = this.items.find(item => item._id === itemId);
        this.showItemModal = true;
    },
    hideModal() {
        this.showItemModal = false;
        this.selectedItem = null;
    },
    getTrendClass(trend) {
        if(trend == null) return 'text-gray-400';

        if (trend.includes('+')) return 'text-green-400';
        if (trend.includes('-')) return 'text-red-400';
        return 'text-gray-400';
    },
    getTrendIcon(trend) {
        if(trend == null) return 'text-gray-500';    

        if (trend.includes('+')) return 'text-green-500';
        if (trend.includes('-')) return 'text-red-500';   
        return 'text-gray-500';                           
    },
    getTrendIconPath(trend) {
        if(trend == null) return 'M5 12h14'; 

        if (trend.includes('+')) {
            return 'M7 14l5-5 5 5z';
        }
        if (trend.includes('-')) {
            return 'M7 10l5 5 5-5z';
        }
        return 'M5 12h14';
    },
    // async fetchItems() {
    //     try {
    //         const response = await fetch('https://api.silverfoxvalues.com/growagarden?category=crops');
    //         this.items = await response.json();
    //         this.activeCategory = 'crops'
            
    //        this.isLoaded = true
    //     } catch (error) {
    //         console.error('Error fetching items:', error);
    //     }
    // }
    async fetchRestaurantData() {
      try {
        const category = 'crops'
        // This calls your server proxy, not the external API
        const response = await $fetch('/api/gag', {
            query: { category }
        })
        this.activeCategory = 'crops'
        this.isLoaded = true

        this.items = response.data

        this.items = this.items.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

        this.currentPage = 1
        this.displayedItems = []
        
        this.loadMoreItems()
        
        this.$nextTick(() => {
          this.setupInfiniteScroll()
        })

      } catch (error) {
        console.error('Error fetching items:', error);
      }
    },

    loadMoreItems() {
      if (this.loading || this.hasReachedEnd) return;
    
    this.loading = true
    
    setTimeout(() => {
      const filtered = this.filteredItems
      const startIndex = (this.currentPage - 1) * this.itemsPerPage
      const endIndex = startIndex + this.itemsPerPage
      const newItems = filtered.slice(startIndex, endIndex)
      
      this.displayedItems.push(...newItems)
      this.currentPage++
      this.loading = false
    }, 100)
    },

    setupInfiniteScroll() {
      if (!process.client) return; 
      if (this.observer) {
        this.observer.disconnect()
      }
      
      this.observer = new IntersectionObserver(
        (entries) => {
          const target = entries[0]
          if (target.isIntersecting && !this.loading && !this.hasReachedEnd) {
            const totalFiltered = this.filteredItems.length
            const currentDisplayed = this.displayedItems.length
            
            if (currentDisplayed < totalFiltered) {
              this.loadMoreItems()
            }
          }
        },
        {
          root: null,
          rootMargin: '100px',
          threshold: 0.1
        }
      )

      if (this.$refs.scrollTrigger) {
        this.observer.observe(this.$refs.scrollTrigger)
      }
    },

  resetAndReload() {
    this.currentPage = 1
    this.displayedItems = []
    this.loadMoreItems()
  }
},
beforeUnmount() {
  if (this.observer) {
    this.observer.disconnect()
  }
  if (this.searchTimeout) {
    clearTimeout(this.searchTimeout)
  }
},
created() {
    this.fetchRestaurantData();
}
}
</script>

  