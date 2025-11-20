<template>
    <div class="bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950">
        <MainHeader />
        <div class="max-w-6xl mx-auto pt-32 pb-20">
          <h1 class="font-bold lg:text-5xl text-3xl text-center bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">AdoptMe value Calculator</h1>
        <div class="md:p-6 p-3">
          <div class="score-bar bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl border border-slate-600 lg:px-8 px-3 lg:py-4 py-2 mb-8 grid grid-cols-3 shadow-xl">
            <div class="flex items-center space-x-4">
              <span class="lg:text-6xl text-xl font-bold text-emerald-400">{{ leftValue }}</span>
            </div>
  
            <div class="flex items-center justify-center lg:space-x-8 space-x-1">
              <div class="text-center">
                <div class="text-slate-300 lg:text-xl text-sm font-medium uppercase lg:tracking-wider mb-1">YOUR OFFER</div>
                <div class="h-0.5 bg-emerald-500 rounded"></div>
              </div>
              
              <div class="text-slate-400 text-2xl font-light">|</div>
              
              <div class="text-center">
                <div class="text-slate-300 lg:text-xl text-sm font-medium uppercase lg:tracking-wider mb-1">THEIR OFFER</div>
              </div>
            </div>
            
            <div class="flex items-center justify-end space-x-4">
              <span class="lg:text-6xl text-xl font-bold text-blue-400">{{ rightValue }}</span>
            </div>
          </div>
  
          <div class="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-600 lg:p-8 p-2 py-6 lg:py-8 relative shadow-2xl">
            <div class="grid grid-cols-2 lg:gap-32 gap-16">
              <div class="space-y-4">
                <div class="grid grid-cols-3 lg:gap-3 gap-1">
                  <div
                    v-for="index in 9"
                    :key="`left-${index-1}`"
                    class="trade-slot rounded-lg lg:h-28 h-14 flex items-center justify-center transition-all duration-300 shadow-lg"
                    :class="getSlotClass('left', index-1)"
                    @click="handleSlotClick('left', index-1)"
                  >
                    <template v-if="leftItems[index-1]">
                      <div class="text-center relative">
                        <div class="flex justify-center">
                          <img class="lg:w-20 lg:h-20 w-10 h-10 lg:p-2.5 rounded" :src="`https://storage.silverfoxvalues.com/adoptme/${leftItems[index-1].imageName}`"/>
                        </div>
                        <div class="absolute flex lg:gap-1.5 gap-px lg:-mt-4 -mt-[10px] lg:-ml-3.5 ml-px text-white font-semibold">
                            <div v-if="leftItems[index-1]?.selected?.includes('f')" class="bg-[#3B82F6] lg:px-1.5 px-0.5 lg:py-0.5 lg:text-sm text-xs rounded-full">F</div>
                            <div v-if="leftItems[index-1]?.selected?.includes('r')" class="bg-[#E4046F] lg:px-1.5 px-0.5 lg:py-0.5 lg:text-sm text-xs rounded-full">R</div>
                            <div v-if="leftItems[index-1]?.selected?.includes('n')" class="bg-[#22C55E] lg:px-1.5 px-0.5 lg:py-0.5 lg:text-sm text-xs rounded-full">N</div>
                            <div v-if="leftItems[index-1]?.selected?.includes('m')" class="bg-[#A855F7] lg:px-1.5 px-0.5 lg:py-0.5 lg:text-sm text-xs rounded-full">M</div>
                        </div>
                      </div>
                    </template>
                    <template v-else-if="index-1 === leftItems.length && index-1 < 9">
                      <div class="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full lg:w-12 lg:h-12 h-6 w-6 flex items-center justify-center shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
                        <svg class="text-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z"/></svg>

                      </div>
                    </template>
                  </div>
                </div>
              </div>
  
              <div class="space-y-4">
                <div class="grid grid-cols-3 lg:gap-3 gap-1">
                  <div
                    v-for="index in 9"
                    :key="`right-${index-1}`"
                    class="trade-slot rounded-lg lg:h-28 h-14 flex items-center justify-center transition-all duration-300 shadow-lg"
                    :class="getSlotClass('right', index-1)"
                    @click="handleSlotClick('right', index-1)"
                  >
                    <template v-if="rightItems[index-1]">
                      <div class="text-center">
                        <div class="flex justify-center">
                          <img class="lg:w-20 lg:h-20 w-10 h-10 lg:p-2.5 rounded" :src="`https://storage.silverfoxvalues.com/adoptme/${rightItems[index-1].imageName}`"/>
                        </div>
                        <div class="absolute flex lg:gap-1.5 gap-px lg:-mt-4 -mt-[10px] lg:-ml-3.5 ml-px text-white font-semibold">
                            <div v-if="rightItems[index-1]?.selected?.includes('f')" class="bg-[#3B82F6] lg:px-1.5 px-0.5 lg:py-0.5 lg:text-sm text-xs rounded-full">F</div>
                            <div v-if="rightItems[index-1]?.selected?.includes('r')" class="bg-[#E4046F] lg:px-1.5 px-0.5 lg:py-0.5 lg:text-sm text-xs rounded-full">R</div>
                            <div v-if="rightItems[index-1]?.selected?.includes('n')" class="bg-[#22C55E] lg:px-1.5 px-0.5 lg:py-0.5 lg:text-sm text-xs rounded-full">N</div>
                            <div v-if="rightItems[index-1]?.selected?.includes('m')" class="bg-[#A855F7] lg:px-1.5 px-0.5 lg:py-0.5 lg:text-sm text-xs rounded-full">M</div>
                        </div>
                      </div>
                    </template>
                    <template v-else-if="index-1 === rightItems.length && index-1 < 9">
                      <div class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-full lg:w-12 lg:h-12 h-6 w-6 flex items-center justify-center shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                        <svg class="text-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z"/></svg>

                      </div>
                    </template>
                  </div>
                </div>
              </div>
            </div>
  
            <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <p class="text-xl font-bold flex justify-center" :class="diffTextClass">{{ winLoss }}</p>
              <div 
                class="rounded-full lg:w-20 lg:h-20 w-14 h-14 flex items-center justify-center border-2 shadow-2xl transition-all duration-300"
                :class="diffBackgroundClass"
              >
                <span class="text-white lg:text-xl text-xs font-bold">{{ difference }}</span>
              </div>
            </div>
            <h1 class="text-center text-lg font-bold mt-3 text-slate-400">AdoptMe Calculator</h1>
          </div>
        </div>
      </div>
  
      <div v-show="showModal && currentStep === 'item'" class="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50" @click="closeModal">
            <div class="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-600 lg:p-6 p-3 max-w-2xl w-full mx-4 shadow-2xl" @click.stop>
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-white text-lg font-semibold">Select Item</h3>
                    <button @click="closeModal" class="text-slate-400 hover:text-white text-xl transition-colors duration-200">
                    <span>&times;</span>
                    </button>
                </div>
                
                <div class="relative mb-4">
                    <input 
                    v-model="searchTerm"
                    type="text" 
                    class="w-full px-4 py-3 pl-10 rounded-lg bg-slate-700 border border-slate-500 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200" 
                    placeholder="Search pets..."
                    />
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg class="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                    </div>
                </div>
                <div class="flex gap-5">
                    <div class="space-y-2 *:min-w-32">
                    <div @click="SetCategory('pets')" :class="category == 'pets' ? 'bg-gray-700 border-gray-400' : 'border-gray-800'" class="bg-gray-600 border p-2.5 px-3 rounded-lg text-white font-semibold cursor-pointer duration-300">Pets</div>
                    <div @click="SetCategory('eggs')" :class="category == 'eggs' ? 'bg-gray-700 border-gray-400' : 'border-gray-800'" class="bg-gray-600 border p-2.5 px-3 rounded-lg text-white font-semibold cursor-pointer duration-300">Eggs</div>
                    <div @click="SetCategory('Pet wear')" :class="category == 'Pet wear' ? 'bg-gray-700 border-gray-400' : 'border-gray-800'" class="bg-gray-600 border p-2.5 px-3 rounded-lg text-white font-semibold cursor-pointer duration-300">Pet Wear</div>
                    <div @click="SetCategory('strollers')" :class="category == 'strollers' ? 'bg-gray-700 border-gray-400' : 'border-gray-800'" class="bg-gray-600 border p-2.5 px-3 rounded-lg text-white font-semibold cursor-pointer duration-300">Strollers</div>
                    <div @click="SetCategory('food')" :class="category == 'food' ? 'bg-gray-700 border-gray-400' : 'border-gray-800'" class="bg-gray-600 border p-2.5 px-3 rounded-lg text-white font-semibold cursor-pointer duration-300">Food</div>
                    <div @click="SetCategory('vehicles')" :class="category == 'vehicles' ? 'bg-gray-700 border-gray-400' : 'border-gray-800'" class="bg-gray-600 border p-2.5 px-3 rounded-lg text-white font-semibold cursor-pointer duration-300">Vehicles</div>
                    <div @click="SetCategory('toys')" :class="category == 'toys' ? 'bg-gray-700 border-gray-400' : 'border-gray-800'" class="bg-gray-600 border p-2.5 px-3 rounded-lg text-white font-semibold cursor-pointer duration-300">Toys</div>
                    <div @click="SetCategory('gifts')" :class="category == 'gifts' ? 'bg-gray-700 border-gray-400' : 'border-gray-800'" class="bg-gray-600 border p-2.5 px-3 rounded-lg text-white font-semibold cursor-pointer duration-300">Gifts</div>
                    <div @click="SetCategory('stickers')" :class="category == 'stickers' ? 'bg-gray-700 border-gray-400' : 'border-gray-800'" class="bg-gray-600 border p-2.5 px-3 rounded-lg text-white font-semibold cursor-pointer duration-300">Stickers</div>
                    </div>
                    <div class="grid lg:grid-cols-3 grid-cols-2 gap-3 max-h-[29.5rem] overflow-y-auto">
                    <div
                        v-for="item in filteredItems"
                        :key="item._id"
                        class="item-option bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-500 rounded-xl p-3 cursor-pointer hover:from-slate-600 hover:to-slate-700 hover:border-emerald-500 text-center transition-all duration-200 shadow-lg hover:shadow-emerald-500/20"
                        @click="selectItem(item)"
                    >
                        <div class="flex justify-center">
                            <img class="rounded-lg" :src="`https://storage.silverfoxvalues.com/adoptme/${item.imageName}`"/>
                        </div>
                        <div class="text-sm font-medium text-white mt-2">{{ item.name }}</div>
                    </div>
                    <div v-if="filteredItems.length === 0 && searchTerm" class="col-span-full text-center text-slate-400 py-4">
                        No items found matching "{{ searchTerm }}"
                    </div>
                    <div v-show="!isLoaded" class="text-white">
                        <loader />
                    </div>
  
                    </div>
                </div>
            </div>
        </div>
        <div 
            v-if="showModal && currentStep === 'frnm' && selectedItem" 
            class="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-[51]" 
            @click="closeModal"
        >
            <div class="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-600 p-6 max-w-sm w-full mx-4 shadow-2xl" @click.stop>
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-white text-lg font-semibold">Select FRNM Options</h3>
                <button @click="closeModal" class="text-slate-400 hover:text-white text-xl transition-colors duration-200">
                <span>&times;</span>
                </button>
            </div>
            <p class="text-slate-300 mb-4">{{ selectedItem.name }}</p>
            <div class="flex gap-3 mb-6">
                <button
                v-for="opt in ['f', 'r', 'n', 'm']"
                :key="opt"
                @click="toggleOption(opt)"
                :class="{ 'bg-emerald-500': selectedOptions.includes(opt) }"
                class="p-2 px-4 rounded-lg border border-slate-500 text-white uppercase font-bold transition disabled:bg-gray-500"
                >
                {{ opt }}
                </button>
            </div>
            <button 
                @click="confirmFRNMSelection" 
                class="w-full py-2 px-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-bold"
            >
                Confirm
            </button>
            </div>
        </div>

      <MainFooter />
    </div>
  </template>
  <script>
  export default {
    setup() {
    useHead({
        title: 'AdoptMe Trade Calculator | Pet, Toy & Gift Values - SilverFoxValues',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { name: 'google-adsense-account', content: 'ca-pub-2625601725317470' },
            { name: 'robots', content: 'index,follow' },
            { hid: 'description', name: 'description', content: 'Calculate fair trades for Roblox AdoptMe items, including pets, toys, gifts, and more. Instantly compare values and ensure balanced trades every time!' },
            { hid: 'keywords', name: 'keywords', content: 'AdoptMe trade calculator, Roblox AdoptMe trading, pet values AdoptMe, adoptme pets value, adoptme pets, AdoptMe trading, Roblox trading tool, adoptme' },
            { name: 'author', content: 'SilverFoxValues' },
            
            { hid: 'og:type', property: 'og:type', content: 'website' },
            { hid: 'og:title', property: 'og:title', content: 'AdoptMe Trade Calculator | Roblox Trading Tool | SilverFoxValues' },
            { hid: 'og:description', property: 'og:description', content: 'Use our free trade calculator to ensure fair trades in Roblox AdoptMe. Compare pet, toy, and gift values, calculate differences, and trade smarter with accurate pricing data.' },
            { hid: 'og:url', property: 'og:url', content: 'https://silverfoxvalues.com/adoptme/calculator/' },
            
            { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
            { hid: 'twitter:title', name: 'twitter:title', content: 'AdoptMe Trade Calculator – Fair Roblox Trading Made Easy' },
            { hid: 'twitter:description', name: 'twitter:description', content: 'Easily calculate and compare Roblox AdoptMe pet, toy, and gift values to make perfect trades every time.' }
        ]
    })
},
    data() {
      return {
        filteredItems: [],
        category: null,

        items: [
        ],
        leftItems: [],
        rightItems: [],
        currentSlot: null,
        showModal: false,
        searchTerm: '',
        winLoss: null,

        currentStep: 'item', // or 'frnm'
        selectedItem: null,
        selectedOptions: [], // 'f', 'r', 'n', 'm'

        downloadedCategory: ['pets'],
        isLoaded: false,

      }
    },
    computed: {
      leftValue() {
        return this.calculateTotal(this.leftItems)
      },
      rightValue() {
        return this.calculateTotal(this.rightItems)
      },
      difference() {
        const leftTotal = Number(this.calculateTotal(this.leftItems))
        const rightTotal = Number(this.calculateTotal(this.rightItems))
        const diff = Math.abs(rightTotal - leftTotal).toFixed(2)
        
        if (rightTotal > leftTotal) {
            this.winLoss = "Win"
          return '+' + diff
        } else if (leftTotal > rightTotal) {
            this.winLoss = "Loss"
          return '-' + diff
        } else {
            this.winLoss = "Fair"
          return diff
        }
      },
      diffBackgroundClass() {
        const leftTotal = Number(this.calculateTotal(this.leftItems))
        const rightTotal = Number(this.calculateTotal(this.rightItems))
        
        if (rightTotal > leftTotal) {
          return 'bg-gradient-to-br from-emerald-500 to-emerald-600 border-emerald-400 shadow-emerald-500/50'
        } else if (leftTotal > rightTotal) {
          return 'bg-gradient-to-br from-red-500 to-red-600 border-red-400 shadow-red-500/50'
        } else {
          return 'bg-gradient-to-br from-slate-600 to-slate-700 border-slate-500 shadow-slate-500/50'
        }
      },
      diffTextClass() {
        const leftTotal = Number(this.calculateTotal(this.leftItems))
        const rightTotal = Number(this.calculateTotal(this.rightItems))
        
        if (rightTotal > leftTotal) {
          return 'text-emerald-500'
        } else if (leftTotal > rightTotal) {
          return 'text-red-500'
        } else {
          return 'text-slate-600'
        }
      },
      filteredItems() {
        if (!this.searchTerm.trim() && !this.category) {
            return this.items
        }

        const search = this.searchTerm.toLowerCase()
        return this.items.filter(item => 
            (!this.category || item.category === this.category) &&
            (item.name.toLowerCase().includes(search))
        )
    }

    },
    methods: {
        async SetCategory(cat) {
            this.category = cat
            this.searchTerm = ''
            if(!this.downloadedCategory.includes(cat)){
                this.isLoaded = false
                const category = cat
                try {
                    // This calls your server proxy, not the external API
                    const response = await $fetch('/api/adoptme', {
                        query: { category }
                    })
                    const g = response.data
                    this.items.push(...g)
                    this.downloadedCategory.push(cat)
                } catch (error) {
                    console.error('Error fetching items:', error);
                } finally {
                    this.isLoaded = true;
                }
            } 
        },
        calculateTotal(items) {
            return items.reduce((total, item) => total + (item.calculatedValue || item.value || 0), 0).toFixed(2)
        },
      getSlotClass(side, index) {
        const itemsArray = side === 'left' ? this.leftItems : this.rightItems
        const baseClasses = 'backdrop-blur-sm'
        
        if (itemsArray[index]) {
          if (side === 'left') {
            return `${baseClasses} bg-gradient-to-br from-emerald-900/70 to-emerald-800/70 border-2 border-emerald-500 hover:border-red-400 cursor-pointer hover:shadow-red-400/30`
          } else {
            return `${baseClasses} bg-gradient-to-br from-blue-900/70 to-blue-800/70 border-2 border-blue-500 hover:border-red-400 cursor-pointer hover:shadow-red-400/30`
          }
        } else if (index === itemsArray.length && index < 9) {
          return `${baseClasses} bg-slate-900/50 border-2 border-slate-600 hover:border-slate-400 cursor-pointer hover:shadow-slate-400/20`
        } else {
          return `${baseClasses} bg-slate-900/30 border-2 border-slate-700`
        }
      },
      handleSlotClick(side, slot) {
        const itemsArray = side === 'left' ? this.leftItems : this.rightItems
        
        if (itemsArray[slot]) {
          if (side === 'left') {
            this.leftItems.splice(slot, 1)
          } else {
            this.rightItems.splice(slot, 1)
          }
          return
        }
        
        if (slot === itemsArray.length && slot < 9) {
          this.currentSlot = { side, slot }
          this.searchTerm = ''
          this.showModal = true
        }
      },
      selectItem(item) {
        if (item.tradingValue) {
            this.selectedItem = item;
            this.selectedOptions = [];
            this.currentStep = 'frnm'; // Open FRNM picker
        } else {
            this.addItemToSlot(item, item.value);
        }
    },

    addItemToSlot(item, value) {
        if (!this.currentSlot) return; // Extra safety
        if (this.currentSlot.side === 'left') {
            this.leftItems.push({
            ...item,
            calculatedValue: value,
            });
        } else {
            this.rightItems.push({
            ...item,
            calculatedValue: value,
            });
        }
        this.closeModal();
    },

    confirmFRNMSelection() {
        const item = this.selectedItem;
        const selections = this.selectedOptions;
        const tradingValue = item.tradingValue || {};

        // --- Start of tier-based logic ---
        let calculatedValue;
        if (selections.length === 0) {
            calculatedValue = Number(tradingValue.npRegularValue || tradingValue.regularValue || 0);
        } else {
            const hasFlyRide = selections.includes('f') || selections.includes('r');
            const hasNeon = selections.includes('n');
            const hasMega = selections.includes('m');

            if (hasMega && hasFlyRide) {
            calculatedValue = tradingValue.megaValue || 0;
            } else if (hasMega) {
            calculatedValue = tradingValue.npMegaValue || 0;
            } else if (hasNeon && hasFlyRide) {
            calculatedValue = tradingValue.neonValue || 0;
            } else if (hasNeon) {
            calculatedValue = tradingValue.npNeonValue || 0;
            } else if (hasFlyRide) {
            calculatedValue = tradingValue.regularValue || 0;
            } else {
            calculatedValue = tradingValue.npRegularValue || tradingValue.regularValue || 0;
            }
        }
        // --- End of tier-based logic ---

        // Add to left or right
        if (this.currentSlot.side === 'left') {
            this.leftItems.push({
            ...item,
            selected: [...selections],
            calculatedValue
            });
        } else {
            this.rightItems.push({
            ...item,
            selected: [...selections],
            calculatedValue
            });
        }
        this.closeModal(true);
    },

    toggleOption(option) {
        const idx = this.selectedOptions.indexOf(option);
        

        if(this.selectedOptions.includes('n') && option == 'm'){
            this.selectedOptions.splice(this.selectedOptions.indexOf('n'), 1);
            this.selectedOptions.push('m');
        } else if(this.selectedOptions.includes('m') && option == 'n'){
            this.selectedOptions.splice(this.selectedOptions.indexOf('m'), 1);
            this.selectedOptions.push('n');
        } else if (idx === -1) {
            this.selectedOptions.push(option);
        } else {
            this.selectedOptions.splice(idx, 1);
        }
    },
    closeModal(force) {
        if(force){
            this.showModal = false;
            this.selectedItem = null;
            this.selectedOptions = [];
            this.currentSlot = null
            this.searchTerm = ''
            this.currentStep = 'item';
            return;
        }
        if (this.currentStep === 'frnm') {
        this.currentStep = 'item';
      } else {
        this.showModal = false;
        this.selectedItem = null;
        this.selectedOptions = [];
        this.currentSlot = null
        this.searchTerm = ''
      }
    },
    async fetchRestaurantData() {
      this.pending = true
      this.error = null
      
      try {
        const category = 'pets'
        // This calls your server proxy, not the external API
        const response = await $fetch('/api/adoptme', {
            query: { category }
        })
        this.items = response.data

      } catch (error) {
        this.error = {
          message: error.message || 'Failed to fetch restaurant data'
        }
      } finally {
        this.pending = false
      }
    }
},
mounted() {
    this.fetchRestaurantData();
    // this.fetchItems();
}
  }
  </script>
  