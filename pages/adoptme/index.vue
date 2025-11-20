<template>
    <div class="min-h-screen text-white">
      <main-Header />
  
      <div class="pt-32 pb-8 text-center">
        <div class="container mx-auto px-6">
          <h1 class="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Adopt Me
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


          <div class="relative w-32">
            <!-- Dropdown Button -->
            <button 
                @click="isDropdownOpen = !isDropdownOpen"
                class="flex items-center justify-between w-full px-4 py-2 bg-gray-900 rounded-lg text-sm font-semibold border border-gray-700"
                >
                <span>{{ activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1) }}</span>
                <svg 
                    :class="['w-4 h-4 transition-transform', { 'rotate-180': isDropdownOpen }]"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            <!-- Dropdown Menu -->
            <div 
            v-if="isDropdownOpen"
            class="absolute z-10 w-full mt-1 rounded-lg shadow-lg max-h-[20rem] overflow-auto navbar border border-gray-700"
            >
                <button
                    v-for="category in categories"
                    :key="category.key"
                    :class="[
                    'w-full px-4 py-2 text-left text-sm hover:bg-gray-700 focus:outline-none',
                    { 'bg-gray-900 font-semibold': activeCategory === category.key }
                    ]"
                    @click="setActiveCategory(category.key)"
                >
                    {{ category.label }}
                </button>
            </div>
        </div>

        </div>
      </div>

      <div v-show="!isLoaded" class="flex justify-center my-10">
          <loader />
      </div>
  
      <div class="container mx-auto px-6 pb-12">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div 
            v-for="item in displayedItems"
            :key="item._id"
            class="item-card rounded-xl p-6 relative rarity-rare flex flex-col justify-between"
          >
            <div class="absolute top-3 right-3">
              <span class="category-badge text-xs px-2 py-1 rounded-full font-semibold">{{ item.category.charAt(0).toUpperCase() + item.category.slice(1) }}</span>
            </div>
            
            <div class="text-center mb-4">
              <div class="w-24 h-24 mx-auto mb-3 rounded-full flex items-center justify-center">
                <img :alt="item.imageName" :src="`https://storage.silverfoxvalues.com/adoptme/${item.imageName}`" loading="lazy">
              </div>
              <h1 class="text-lg font-bold text-white">{{ item.name }}</h1>
              <p class="text-sm text-gray-400">{{ item.category.charAt(0).toUpperCase() + item.category.slice(1) }}</p>
            </div>
            <div v-if="item.category == 'pets'" class="flex gap-2.5 my-2">
                <div @click="togglePetOption(item._id, 'f')" :class="getPetButtonClass(item._id, 'f')" class="duration-300 cursor-pointer border rounded-lg text-white px-4 ">F</div>
                <div @click="togglePetOption(item._id, 'r')" :class="getPetButtonClass(item._id, 'r')" class="duration-300 cursor-pointer border rounded-lg text-white px-4 ">R</div>
                <div @click="togglePetOption(item._id, 'n')" :class="getPetButtonClass(item._id, 'n')" class="duration-300 cursor-pointer border rounded-lg text-white px-4 ">N</div>
                <div @click="togglePetOption(item._id, 'm')" :class="getPetButtonClass(item._id, 'm')" class="duration-300 cursor-pointer border rounded-lg text-white px-4 ">M</div>
            </div>
            <div class="space-y-2 mb-4">
              <div class="flex justify-between items-center">
                <span class="text-gray-300 text-sm">Current Value:</span>
                <span class="value-badge text-sm px-2 py-1 rounded-full font-bold">{{ item.category == 'pets' ? getItemCombinedValue(item._id) : Number(item.value).toLocaleString('en-US') }}</span>
              </div>
              <div class="flex justify-between items-center">
                    <span class="text-gray-300">Demand: </span>
                    <span class="text-white">{{ item.category == 'pets' ? getItemCombinedValueDemand(item._id) : item.demand }}</span>
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
                <img :alt="selectedItem.imageName" class="w-24 h-24" :src="`https://storage.silverfoxvalues.com/adoptme/${selectedItem.imageName}`">
              </div>
              <h2 class="text-2xl font-bold text-white mb-2">{{ selectedItem.name }}</h2>
              <div class="flex justify-center items-center space-x-2 mb-4">
                <span class="bg-purple-600 text-xs px-2 py-1 rounded-full">{{ selectedItem.category.charAt(0).toUpperCase() + selectedItem.category.slice(1) }}</span>
              </div>
            </div>
            
            <div class="space-y-4">
              <div>
                <h3 class="font-semibold text-white mb-2">Current Value</h3>
                <div class="flex justify-between items-center bg-gray-800 rounded-lg p-3">
                  <span class="text-green-400 font-bold text-lg">{{ selectedItem.category == 'pets' ? getItemCombinedValue(selectedItem._id) : Number(selectedItem.value).toLocaleString('en-US') }}</span>
                  <span :class="getTrendClass(selectedItem.trend)" class="flex items-center">
                    <svg :class="getTrendIcon(selectedItem.trend)" class="mr-1 w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path :d="getTrendIconPath(selectedItem.trend)"></path>
                    </svg>
                    {{ selectedItem.trend }}
                </span>
                </div>
              </div>
              
                <div class="flex justify-between items-center">
                    <span class="text-gray-300">Demand: </span>
                    <span class="text-white">{{ selectedItem.category == 'pets' ? getItemCombinedValueDemand(selectedItem._id) : selectedItem.demand }}</span>
                </div>

              <div v-if="selectedItem.description != null">
                <h3 class="font-semibold text-white mb-2">Description</h3>
                <p class="text-gray-300 text-sm leading-relaxed">{{ selectedItem.description }}</p>
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
        title: 'Adopt Me Values | Pets, Vehicles & Toys - SilverFoxValues',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { name: 'google-adsense-account', content: 'ca-pub-2625601725317470' },
            { name: 'robots', content: 'index,follow' },
            { hid: 'description', name: 'description', content: 'Weekly updated pet, vehicle, and toy values for Adopt Me on Roblox. Stay ahead in trading with legendary pets, rare vehicles, and exclusive toy pricing!' },
            { hid: 'keywords', name: 'keywords', content: 'Adopt Me pets, Adopt Me values, Adopt Me Roblox, pet values, vehicle values, toy values, Adopt Me trading, adoptme pets value, rare vehicles, adoptme values, adoptme trading values' },
            { name: 'author', content: 'SilverFoxValues' },
            
            { hid: 'og:type', property: 'og:type', content: 'website' },
            { hid: 'og:title', property: 'og:title', content: 'Adopt Me Values | Roblox Pets, Vehicles & Toys | SilverFoxValues' },
            { hid: 'og:description', property: 'og:description', content: 'Stay updated with the most accurate Adopt Me Roblox values. Discover the latest pet, vehicle, and toy prices updated weekly for better trading decisions.' },
            { hid: 'og:url', property: 'og:url', content: 'https://silverfoxvalues.com/adoptme/' },
            
            { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
            { hid: 'twitter:title', name: 'twitter:title', content: 'Adopt Me Roblox – Weekly Pet, Vehicle & Toy Values' },
            { hid: 'twitter:description', name: 'twitter:description', content: 'Track trusted weekly values of Adopt Me pets, vehicles, and toys. Make better trades on Roblox using SilverFoxValues.' }
        ]
    })
},
data() {
    return {
        isLoaded: false,
      searchQuery: '',
      activeCategory: 'pets',
      showItemModal: false,
      selectedItem: null,
      isDropdownOpen: false,
      petSelections: {},

      items: [],
      categories: [
          { key: 'pets', label: 'Pets' },
          { key: 'eggs', label: 'Eggs' },
          { key: 'Pet wear', label: 'Pets Wear' },
          { key: 'strollers', label: 'Strollers' },
          { key: 'food', label: 'Food' },
          { key: 'vehicles', label: 'vehicles' },
          { key: 'toys', label: 'Toys' },
          { key: 'gifts', label: 'Gifts' },
          { key: 'stickers', label: 'Stickers' }
      ],
      downloadedCategory: ['pets'],

      // Infinite scroll
      displayedItems: [],
      itemsPerPage: 12, // Good for grid layouts (divisible by 2,3,4)
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
    togglePetOption(itemId, option) {
      if (!this.petSelections[itemId]) {
        this.petSelections[itemId] = [];
      }
      
      const selections = this.petSelections[itemId];
      const isSelected = selections.includes(option);
      
      if (isSelected) {
        // Remove selection
        this.petSelections[itemId] = selections.filter(s => s !== option);
      } else {
        // Handle N and M mutual exclusivity
        if (option === 'n' && selections.includes('m')) {
          // Remove M when selecting N
          this.petSelections[itemId] = selections.filter(s => s !== 'm');
          this.petSelections[itemId].push('n');
        } else if (option === 'm' && selections.includes('n')) {
          // Remove N when selecting M
          this.petSelections[itemId] = selections.filter(s => s !== 'n');
          this.petSelections[itemId].push('m');
        } else {
          // Check if can add this option (for all 4 constraint)
          if (this.canSelectPetOption(itemId, option)) {
            this.petSelections[itemId].push(option);
          }
        }
      }
      
      // Force reactivity update
      this.$forceUpdate();
    },
    
    canSelectPetOption(itemId, option) {
      const currentSelections = this.petSelections[itemId] || [];
      const newSelections = [...currentSelections, option];
      
      // Can't select all 4
      if (newSelections.length >= 4) return false;
      
      return true;
    },
    
    getPetButtonClass(itemId, option) {
      const selections = this.petSelections[itemId] || [];
      const isSelected = selections.includes(option);
      const canSelect = !isSelected && this.canSelectPetOption(itemId, option);
      
      // Return complete class names based on option
      switch(option) {
        case 'f':
          return {
            'border-blue-500': true,
            'bg-blue-500': isSelected,
            'hover:bg-blue-500': canSelect || isSelected,
          };
        case 'r':
          return {
            'border-[#E4046F]': true,
            'bg-[#E4046F]': isSelected,
            'hover:bg-[#E4046F]': canSelect || isSelected,
          };
        case 'n':
          return {
            'border-green-500': true,
            'bg-green-500': isSelected,
            'hover:bg-green-500': canSelect || isSelected,
          };
        case 'm':
          return {
            'border-purple-500': true,
            'bg-purple-500': isSelected,
            'hover:bg-purple-500': canSelect || isSelected,
          };
        default:
          return {};
      }
    },
    
    getItemCombinedValue(itemId) {
        const item = this.filteredItems.find(i => i._id === itemId);
        
        if (!item) return '0';
        
        if (item.category !== 'pets') {
            return Number(item.value).toLocaleString('en-US');
        }
      
        // For pets, calculate based on selected options
        const selections = this.petSelections[itemId] || [];
      
        if (selections.length === 0) {
            return Number(item.tradingValue?.npRegularValue || item.tradingValue?.regularValue);
        }

        const hasFlytRide = selections.includes('f') || selections.includes('r');
        const hasNeon = selections.includes('n');
        const hasMega = selections.includes('m');
      
        let totalValue = 0;

        // Handle all combinations based on your complete rules
        if (hasMega && hasFlytRide) {
            // F + R + M / F + R + M: megaNeonValue
            totalValue = item.tradingValue?.megaValue || 0;
        } else if (hasMega) {
            // M: npMegaNeonValue  
            totalValue = item.tradingValue?.npMegaValue || 0;
        } else if (hasNeon && hasFlytRide) {
            // (F OR R) + Neon / F+R+N: neonValue
            totalValue = item.tradingValue?.neonValue || 0;
        } else if (hasNeon) {
            // N: npNeonValue
            totalValue = item.tradingValue?.npNeonValue || 0;
        } else if (hasFlytRide) {
            // F + R OR (F OR R): regularValue
            totalValue = item.tradingValue?.regularValue || 0;
        } else {
            // This shouldn't happen since selections.length > 0, but fallback
            totalValue = item.tradingValue?.npRegularValue || item.tradingValue?.regularValue;
        }   

      
      return totalValue.toLocaleString('en-US');
    },
    getItemCombinedValueDemand(itemId) {
        const item = this.filteredItems.find(i => i._id === itemId);
        
        if (!item) return '0';
        if (item.category !== 'pets') {
            return item.tradingValue?.npRegularValueDemand
        }
        // For pets, calculate based on selected options
        const selections = this.petSelections[itemId] || [];
      
        if (selections.length === 0) {
            return item.tradingValue?.npRegularDemand || item.tradingValue?.regularDemand
        }

        const hasFlytRide = selections.includes('f') || selections.includes('r');
        const hasNeon = selections.includes('n');
        const hasMega = selections.includes('m');
      
        let totalValue = null;

        // Handle all combinations based on your complete rules
        if (hasMega && hasFlytRide) {
            // F + R + M / F + R + M: megaNeonValue
            totalValue = item.tradingValue?.megaDemand
        } else if (hasMega) {
            // M: npMegaNeonValue  
            totalValue = item.tradingValue?.npMegaDemand
        } else if (hasNeon && hasFlytRide) {
            // (F OR R) + Neon / F+R+N: neonValue
            totalValue = item.tradingValue?.neonDemand
        } else if (hasNeon) {
            // N: npNeonValue
            totalValue = item.tradingValue?.npNeonDemand
        } else if (hasFlytRide) {
            // F + R OR (F OR R): regularValue
            totalValue = item.tradingValue?.regularDemand         
        } else {
            totalValue = item.tradingValue?.npRegularDemand || item.tradingValue?.regularDemand
        }   

      
      return totalValue
    },
    async setActiveCategory(category) {
        this.searchQuery = null
        this.activeCategory = category;

        if(!this.downloadedCategory.includes(category)){
            this.isLoaded = false
            const category = this.activeCategory
            try {
                // This calls your server proxy, not the external API
                const response = await $fetch('/api/adoptme', {
                    query: { category }
                })
                const g = response.data
                this.items.push(...g)
                this.downloadedCategory.push(category)

                let filtered = this.items;
                if (this.activeCategory !== 'all') {
                    filtered = filtered.filter(item => item.category === this.activeCategory);
                }
                this.resetAndReload();

            } catch (error) {
                console.error('Error fetching items:', error);
            } finally {
                this.isLoaded = true;
            }
        } 
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
    //         const response = await fetch('https://api.silverfoxvalues.com/adoptme');
    //         this.items = await response.json();
            
    //     } catch (error) {
    //         console.error('Error fetching items:', error);
    //     }
    // }
    async fetchAdoptMeData() {
      try {
        // This calls your server proxy, not the external API
        const response = await $fetch('/api/adoptme', {
            query: { category: 'pets' }
        })

        this.items = response.data

        this.currentPage = 1
        this.displayedItems = []
        
        this.loadMoreItems()
        
        this.$nextTick(() => {
          this.setupInfiniteScroll()
        })

        // this.items = response
        this.isLoaded = true

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
    this.fetchAdoptMeData();
}
}
</script>
  
<style>
body {
background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.item-card {
background: #14171D;
border: 1px solid rgba(64, 64, 64, 0.5);
backdrop-filter: blur(10px);
transition: all 0.3s ease;
}

.navbar {
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
}

.item-card:hover {
transform: translateY(-5px);
border-color: rgba(139, 92, 246, 0.5);
box-shadow: 0 20px 40px rgba(139, 92, 246, 0.3);
}


.category-badge {
background: linear-gradient(45deg, #8b5cf6, #06b6d4);
}

.value-badge {
background: linear-gradient(45deg, #10b981, #059669);
}

.rarity-legendary {
border-color: #fbbf24;
box-shadow: 0 0 20px rgba(251, 191, 36, 0.3);
}

.rarity-epic {
border-color: #8b5cf6;
box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
}

.rarity-rare {
border-color: #06b6d4;
box-shadow: 0 0 20px rgba(6, 182, 212, 0.3);
}

.rarity-common {
border-color: #6b7280;
}

.details-btn {
background: linear-gradient(45deg, #7c3aed, #5b21b6);
transition: all 0.3s ease;
}

.details-btn:hover {
background: linear-gradient(45deg, #5b21b6, #4c1d95);
transform: scale(1.05);
}

.modal-overlay {
background: rgba(0, 0, 0, 0.8);
backdrop-filter: blur(5px);
}

.modal-content {
background: linear-gradient(135deg, #1f2937, #111827);
border: 1px solid rgba(139, 92, 246, 0.3);
}

.search-bar {
background: rgba(20, 20, 20, 0.8);
border: 1px solid rgba(64, 64, 64, 0.5);
backdrop-filter: blur(10px);
}

.filter-btn {
background: rgba(139, 92, 246, 0.2);
border: 1px solid rgba(139, 92, 246, 0.3);
transition: all 0.3s ease;
}

.filter-btn:hover,
.filter-btn.active {
background: rgba(139, 92, 246, 0.4);
border-color: rgba(139, 92, 246, 0.6);
}
</style>
  