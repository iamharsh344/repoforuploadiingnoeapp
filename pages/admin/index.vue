<template>
    <div v-if="hasToken" class="min-h-screen bg-slate-900 text-white">
  
    <div class="flex">
        <div class="sm:w-20 w-16 bg-slate-800 border-r border-slate-700 py-6 min-h-screen">
            <div class="flex flex-col items-center space-y-4">
                <div class="w-14 h-14 flex items-center justify-center hover:scale-105 transition-transform rounded">
                    <img src="/logo/SilverFoxLogo.webp">
                </div>
                <div @click="selectGame('gag')" class="game-icon bg-gradient-to-br from-orange-500 to-red-600 cursor-pointer flex items-center justify-center" data-game="gag">
                    <img src="/admin/gag.jpg">
                </div>
                <div @click="selectGame('mr')" class="game-icon bg-gradient-to-br from-red-500 to-pink-600 cursor-pointer flex items-center justify-center" data-game="mr">
                    <img src="/admin/mr.jpg">
                </div>
                <div @click="selectGame('adoptme')" class="game-icon bg-gradient-to-br from-red-500 to-pink-600 cursor-pointer flex items-center justify-center" data-game="adoptme">
                    <img src="/admin/adoptme.jpg">
                </div>
            </div>
        </div>
  
        <main class="flex-1">
            <header class="bg-slate-800 border-b border-slate-700 px-6 py-5">
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-4">
                        <div>
                            <h1 class="text-2xl font-bold">Gaming Admin Panel</h1>
                            <p class="text-slate-400 text-base">Manage your gaming inventory</p>
                        </div>
                    </div>
                    <div class="text-right">
                        <div @click="logout()" class="text-sm text-slate-400 p-1.5 bg-gray-700 rounded-lg cursor-pointer">Logout</div>
                    </div>
                </div>
            </header>

            <div class="sm:p-6 p-3">
                <div class="mb-6">
                    <div class="flex flex-col sm:flex-row gap-2.5 sm:items-center mb-4">
                        <div class="relative min-w-20 max-w-80">
                            <input 
                                v-model="searchQuery"
                                type="text" 
                                placeholder="Search Items..." 
                                class="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 pl-10 text-white placeholder-slate-400 focus:outline-none focus:border-slate-500"
                            >
                            <svg class="absolute left-3 top-2.5 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                            </svg>
                        </div>
                        <div v-show="selectedGame == 'gag'">
                            <button @click="showAddModal = true" class="px-4 py-2.5 rounded-lg text-sm font-medium transition-colors bg-slate-700 text-slate-300 hover:bg-slate-600">Add</button>
                        </div>
                    </div>
                    
                    <div class="flex">
                      <div class="grid grid-cols-4 gap-4">
                        <button 
                            v-for="filter in availableFilters" 
                            :key="filter"
                            :class="[
                            'sm:px-4 px-2 py-2 rounded-lg text-sm font-medium transition-colors',
                            selectedFilter === filter 
                                ? 'bg-slate-600 text-white' 
                                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                            ]"
                            @click="selectedFilter = filter"
                        >
                            {{ filter == 'crops' ? 'plants' : filter }}
                        </button>
                      </div>

                    </div>
                </div>
        
                <div class="mb-6">
                    <h2 class="text-lg font-semibold mb-2">{{ gameTitle }}</h2>
                    <p class="text-slate-400 text-sm mb-4">Manage items for selected game</p>
                </div>
        
                <div v-if="loading" class="flex justify-center items-center h-64">
                    <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-slate-500"></div>
                </div>
      
                <div v-else-if="error" class="bg-red-900 border border-red-700 rounded-lg p-4 mb-6">
                    <p class="text-red-300">{{ error }}</p>
                    <button 
                        @click="fetchGameData" 
                        class="mt-2 bg-red-700 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm"
                    >
                    Retry
                    </button>
                </div>
        
                <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                    <div 
                        v-for="item in filteredItems" 
                        :key="item.id || item.name"
                        class="bg-slate-800 rounded-lg p-4 border border-slate-700 hover:border-slate-600 transition-colors flex flex-col justify-between"
                    >
                        <div class="flex items-center mb-3">
                            <div class="w-12 h-12 p-1 flex items-center justify-center mr-3">
                                <img 
                                :src="`https://storage.silverfoxvalues.com/${selectedGame}/${item.imageName}`"
                                :alt="item.name"
                                class="w-full h-full object-cover rounded"
                                >
                            </div>
                            <div class="flex-1 min-h-12">
                                <h3 class="text-base font-medium">{{ item.name }}</h3>
                                <p class="text-sm text-slate-400">{{ (item.category == 'crops' ? 'plants' : item.category) || item.type || 'Item' }}</p>
                            </div>
                        </div>

                        <!-- Dynamic Fields Based on Game -->
                        <div class="space-y-2 mb-3">
                            <div v-for="field in gameDisplayFields[selectedGame]" :key="field.key">
                                <div v-if="item[field.key] !== undefined && item[field.key] !== null" class="flex justify-between">
                                    <p class="text-sm text-slate-400 mb-1">{{ field.label }}:</p>
                                    
                                    <div v-if="field.format === 'currency'" class="flex items-center">
                                        <span class="text-lg font-semibold">
                                            {{ formatFieldValue(item[field.key], field.format) }}
                                        </span>
                                        <span v-if="field.icon" class="text-slate-400 ml-1">{{ field.icon }}</span>
                                    </div>
                                    
                                    <div v-else-if="field.format === 'badge' && item.category == 'pets'">
                                        <span 
                                        class="inline-block px-2 py-1 rounded-full text-xs font-medium text-white"
                                        :class="getRarityColor(item[field.key])"
                                        >
                                            {{ formatFieldValue(item[field.key], field.format) }}
                                        </span>
                                    </div>
                                    
                                    <div v-else>
                                        <span class="text-base font-semibold" :class="field.key == 'value' ? 'text-green-400':'text-slate-200'">
                                            {{ formatFieldValue(item[field.key], field.format) }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button @click="openEditModal(item)" class="w-full bg-slate-600 hover:bg-slate-500 text-white py-2 rounded-lg text-sm font-medium transition-colors">
                        Edit Item
                        </button>
                    </div>
                </div>

            </div>
        </main>
    </div>
      
    <div v-if="showEditModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-slate-800 rounded-lg p-6 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
            <div class="flex items-center justify-between mb-6">
                <h2 class="text-xl font-semibold text-white">Edit Item</h2>
                <button @click="closeEditModal" class="text-slate-400 hover:text-white">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
            </div>

            <form @submit.prevent="saveChanges" v-if="editingItem">
                <div class="grid grid-cols-3 gap-4 mb-6">
                    <div v-for="field in gameFields[selectedGame]" :key="field.key" :class="field.type === 'textarea' ? 'col-span-3' : 'col-span-1'">
                        <label class="block text-sm font-medium text-slate-300 mb-2">{{ field.label }}:</label>
                        
                        <input 
                            v-if="field.type === 'text'"
                            v-model="editingItem[field.key]"
                            type="text"
                            class="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-slate-500 disabled:bg-gray-800"
                            :disabled="field.key == 'name'"
                        />

                        <input 
                            v-if="field.type === 'image'"
                            @change="handleFileChange($event, editingItem[field.key])"
                            type="file"
                            class="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-slate-500 disabled:bg-gray-800"
                        />
                        
                        <select 
                            v-else-if="field.type === 'select'"
                            v-model="editingItem[field.key]"
                            class="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-slate-500"
                        >
                            <option v-for="option in field.options" :key="option" :value="option">{{ option }}</option>
                        </select>
                        
                        <textarea 
                            v-else-if="field.type === 'textarea'"
                            v-model="editingItem[field.key]"
                            rows="4"
                            class="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-slate-500 resize-none"
                        ></textarea>
                    </div>
                </div>
                <div v-if="saveMessage" class="mb-4 p-3 rounded-lg" :class="saveMessageType === 'success' ? 'bg-green-900 border border-green-700 text-green-300' : 'bg-red-900 border border-red-700 text-red-300'">
                    {{ saveMessage }}
                </div>
                <div class="flex space-x-4">
                    <button type="button" @click="closeEditModal" class="px-6 py-2 bg-slate-600 hover:bg-slate-500 text-white rounded-lg font-medium transition-colors">
                        Cancel
                    </button>
                    <button type="submit" :disabled="saving" class="flex-1 flex justify-center gap-2.5 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                        <div v-if="saving" class="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        {{ saving ? 'Saving...' : 'Save Changes' }}
                    </button>
                </div>
            </form>
        </div>
    </div>

    <div v-if="showAddModal && selectedGame == 'gag'" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-slate-800 rounded-lg p-6 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
            <div class="flex items-center justify-between mb-6">
                <h2 class="text-xl font-semibold text-white">Add Item</h2>
                <button @click="closeAddModal" class="text-slate-400 hover:text-white">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
            </div>

            <form @submit.prevent="addChanges">
                <div class="grid grid-cols-3 gap-4 mb-6">
                    <div>
                        <label class="block text-sm font-medium text-slate-300 mb-2">Name:</label>
                        <input 
                            v-model="add.name"
                            type="text"
                            class="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-slate-500 disabled:bg-gray-800"
                        />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-slate-300 mb-2">Price:</label>
                        <input 
                            v-model="add.price"
                            type="text"
                            class="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-slate-500 disabled:bg-gray-800"
                        />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-slate-300 mb-2">Value:</label>
                        <input 
                            v-model="add.value"
                            type="text"
                            class="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-slate-500 disabled:bg-gray-800"
                        />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-slate-300 mb-2">Category:</label>
                        <select v-model="add.category" class="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-slate-500 disabled:bg-gray-800">
                          <option value="pets">Pets</option>
                          <option value="crops">Plants</option>
                          <option value="gears">Gears</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-slate-300 mb-2">Rarity:</label>
                        <select v-model="add.rarity" class="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-slate-500 disabled:bg-gray-800">
                          <option value="common">Common</option>
                          <option value="uncommon">uncommon</option>
                          <option value="rare">rare</option>
                          <option value="epic">epic</option>
                          <option value="legendary">legendary</option>
                          <option value="mythical">mythical</option>
                          <option value="divine">divine</option>
                          <option value="prismatic">prismatic</option>
                          <option value="prismatic">prismatic</option>
                        </select>
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-slate-300 mb-2">Demand:</label>
                        <input 
                            v-model="add.demand"
                            type="text"
                            class="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-slate-500 disabled:bg-gray-800"
                        />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-slate-300 mb-2">Image:</label>
                        <input 
                            @change="handleFileChange($event, 'null')"
                            type="file"
                            class="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-slate-500 disabled:bg-gray-800"
                        />
                    </div>
                    <div class="col-span-3">
                        <label class="block text-sm font-medium text-slate-300 mb-2">Description:</label>
                        <textarea 
                            v-model="add.description"
                            rows="4"
                            class="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-slate-500 resize-none"
                        ></textarea>
                    </div>
                </div>
                <div v-if="saveMessage" class="mb-4 p-3 rounded-lg" :class="saveMessageType === 'success' ? 'bg-green-900 border border-green-700 text-green-300' : 'bg-red-900 border border-red-700 text-red-300'">
                    {{ saveMessage }}
                </div>
                <div class="flex space-x-4">
                    <button type="button" @click="closeAddModal" class="px-6 py-2 bg-slate-600 hover:bg-slate-500 text-white rounded-lg font-medium transition-colors">
                        Cancel
                    </button>
                    <button type="submit" :disabled="saving" class="flex-1 flex justify-center gap-2.5 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                        <div v-if="saving" class="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        {{ saving ? 'Saving...' : 'Save Changes' }}
                    </button>
                </div>
            </form>
        </div>
    </div>

    </div>
</template>
  
<script>
  export default {
    setup() {
    useHead({
        title: 'Admin - SilverFoxValues',
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
        hasToken: false,
        selectedGame: 'gag',
        selectedFilter: 'All',
        searchQuery: '',
        items: [],
        showAddModal: false,
        add: {
            name: null,
            price: null,
            value: null,
            demand: null,
            rarity: null,
            description: null,
            category: null,
        },
        loading: false,
        error: null,
        games: {
          gag: {
            title: 'Grow a Garden',
            url: 'https://api.silverfoxvalues.com/growagarden'
          },
          mr: {
            title: 'My Restaurant',
            url: 'https://api.silverfoxvalues.com/myRestaurantValues'
          },
          adoptme: {
            title: 'Adopt Me',
            url: 'https://api.silverfoxvalues.com/adoptme'
          }
        },

        showEditModal: false,
        editingItem: null,
        gameFields: {
            gag: [
                { key: 'name', label: 'Item Name', type: 'text' },
                { key: 'price', label: 'Price', type: 'text' },
                { key: 'value', label: 'Value', type: 'text' },
                { key: 'demand', label: 'Demand', type: 'text' },
                { key: 'rarity', label: 'Rarity', type: 'text' },
                { key: 'limited', label: 'Limited', type: 'select', options: ['YES', 'NO'] },
                { key: 'robux', label: 'Robux', type: 'text' },
                { key: 'multiHarvest', label: 'Multi-Harvest', type: 'text' },
                { key: 'stable', label: 'Stable', type: 'text' },
                { key: 'description', label: 'Description', type: 'textarea' }
            ],
            mr: [
                { key: 'name', label: 'Item Name', type: 'text' },
                { key: 'value', label: 'Value', type: 'text' },
                { key: 'demand', label: 'Demand', type: 'text' },
                { key: 'description', label: 'Description', type: 'textarea' }
            ],
            adoptme: [
                { key: 'name', label: 'Item Name', type: 'text' },
                { key: 'value', label: 'Value', type: 'text' },
                { key: 'demand', label: 'Demand', type: 'text' },
                { key: 'imageName', label: 'Image', type: 'image' },
                { key: 'description', label: 'Description', type: 'textarea' }
            ]
        },
        gameDisplayFields: {
            gag: [
                { key: 'value', label: 'Value', format: 'text', },
                { key: 'price', label: 'Point', format: 'text' },
                { key: 'demand', label: 'Demand', format: 'text' },
                { key: 'rarity', label: 'Rarity', format: 'badge' },
            ],
            mr: [
                { key: 'value', label: 'Value', format: 'currency', icon: '💎' },
            ],
            adoptme: [
                { key: 'value', label: 'Value', format: 'currency' },
                { key: 'demand', label: 'Demand', format: 'text' },
            ]
        },
        saving: false,
        saveMessage: null,
        saveMessageType: 'success',

        selectedFile: null, // Store the uploaded file
        hasNewFile: false  
      }
    },
    computed: {
        gameTitle() {
            return this.games[this.selectedGame]?.title || 'Select a Game'
        },
        availableFilters() {
            const categories = [...new Set(this.items.map(item => item.category || item.type || 'Item'))]
            return ['All', ...categories]
        },
        filteredItems() {
            let filtered = this.items
    
            if (this.selectedFilter !== 'All') {
                filtered = filtered.filter(item => 
                    (item.category || item.type || 'Item') === this.selectedFilter
                )
            }
    
            if (this.searchQuery.trim()) {
                const query = this.searchQuery.toLowerCase()
                filtered = filtered.filter(item => 
                    item.name.toLowerCase().includes(query)
                )
            }
    
            return filtered
        }
    },
    methods: {
      logout(){
        localStorage.removeItem('token')
        this.$router.push('/admin/login')
      },
      openEditModal(item) {
          this.editingItem = { ...item }
          this.showEditModal = true,

          this.selectedFile = null;
          this.hasNewFile = false;
      },
      closeEditModal() {
          this.showEditModal = false
          this.editingItem = null
          this.saveMessage = null
          this.selectedFile = null;
          this.hasNewFile = false;
      },
      closeAddModal() {
          this.showAddModal = false
          this.selectedFile = null;
          this.hasNewFile = false;
      },
      async addChanges() {
          this.saving = true
          this.saveMessage = null

          try {
              let requestBody;
              const token = localStorage.getItem('token');
              let headers = {
              'Authorization': 'Bearer ' + token
              };

              if (this.hasNewFile && this.selectedFile) {
                  requestBody = new FormData();
                  requestBody.append('itemname', this.add.name);
                  requestBody.append('value', this.add.value);
                  requestBody.append('price', this.add.price);
                  requestBody.append('demand', this.add.demand);
                  requestBody.append('description', this.add.description);
                  requestBody.append('category', this.add.category);
                  requestBody.append('rarity', this.add.rarity);
                  requestBody.append('image', this.selectedFile);
              } else {
                  headers['Content-Type'] = 'application/json';
                  requestBody = JSON.stringify({
                      itemname: this.add.name,
                      value: this.add.value,
                      price: this.add.price,
                      demand: this.add.demand,
                      description: this.add.description,
                      rarity: this.add.rarity,
                      category: this.add.category
                  });
              }

              const response = await fetch('https://api.silverfoxvalues.com/admin/addGAG', {
                  method: 'POST',
                  headers: headers,
                  body: requestBody
              });

              if (response.status === 401) {
                  localStorage.removeItem('token');
                  this.$router.push('/admin/login'); // Requires vue-router
                  return;
              }
              const errorData = await response.json();

              if (!response.ok) {
                  throw new Error(`${errorData.error}`);
              }

              this.saveMessage = 'Item Added successfully!'
              this.saveMessageType = 'success'
              
              // Close modal after 1.5 seconds
              setTimeout(() => {
                  this.closeAddModal()
              }, 1500)
          
          } catch (error) {
              this.saveMessage = `${error.message}`
              this.saveMessageType = 'error'
          } finally {
              this.saving = false
          }
      },

      async saveChanges() {
          if (!this.editingItem) return

          this.saving = true
          this.saveMessage = null

          try {
              if (this.selectedGame === 'gag') {
                  await this.saveGagItem()
              } else if (this.selectedGame === 'mr') {
                  await this.saveMrItem()
              } else if (this.selectedGame === 'adoptme') {
                  await this.saveAdoptMeItem()
              }
              
              // Update local data on success
              const index = this.items.findIndex(item => item.id === this.editingItem.id)
              if (index !== -1) {
                  this.items[index] = { ...this.editingItem }
              }
              
              this.saveMessage = 'Item updated successfully!'
              this.saveMessageType = 'success'
              
              // Close modal after 1.5 seconds
              setTimeout(() => {
                  this.closeEditModal()
              }, 1500)
          
          } catch (error) {
              this.saveMessage = `${error.message}`
              this.saveMessageType = 'error'
          } finally {
              this.saving = false
          }
      },

      async saveGagItem() {
          const token = localStorage.getItem('token');
          try {
              const response = await fetch('https://api.silverfoxvalues.com/admin/updateGAG', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                      'Authorization': 'Bearer ' + token
                  },
                  body: JSON.stringify({
                      id: this.editingItem._id,
                      itemname: this.editingItem.name,
                      value: this.editingItem.value,
                      price: this.editingItem.price,
                      demand: this.editingItem.demand,
                      type: this.editingItem.type,
                      rarity: this.editingItem.rarity,
                      robux: this.editingItem.robux,
                      limited: this.editingItem.limited,
                      multiHarvest: this.editingItem.multiHarvest,
                      description: this.editingItem.description
                  })
              });

              if (response.status === 401) {
                  localStorage.removeItem('token');
                  this.$router.push('/admin/login'); // Requires vue-router
                  return;
              }
              const errorData = await response.json();

              if (!response.ok) {
                  throw new Error(`${errorData.error}`);
              }

              return errorData;
          } catch (error) {

              throw error;
          }
      },

      async saveMrItem() {
          const token = localStorage.getItem('token');
          try {
              const response = await fetch('https://api.silverfoxvalues.com/admin/updateMR', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                      'Authorization': 'Bearer ' + token
                  },
                  body: JSON.stringify({
                      id: this.editingItem._id,
                      itemname: this.editingItem.name,
                      value: this.editingItem.value,
                      demand: this.editingItem.demand,
                      description: this.editingItem.description
                  })
              });

              if (response.status === 401) {
                  localStorage.removeItem('token');
                  this.$router.push('/admin/login'); // Requires vue-router
                  return;
              }
              const errorData = await response.json();

              if (!response.ok) {
                  throw new Error(`${errorData.error}`);
              }

              return errorData;

          } catch (error) {
              console.error('Error saving item:', error);
              throw error;
          }
      },

      handleFileChange(event, fieldKey) {
          const file = event.target.files[0];
          if (file) {
              this.selectedFile = file;
              this.hasNewFile = true;
              // Optionally update the display name
              if(fieldKey != null) this.editingItem[fieldKey] = file.name;
          }
      },
      async saveAdoptMeItem() {
          const token = localStorage.getItem('token');
          
          try {
              let requestBody;
              let headers = {
              'Authorization': 'Bearer ' + token
              };

              if (this.hasNewFile && this.selectedFile) {
                  requestBody = new FormData();
                  requestBody.append('id', this.editingItem._id);
                  requestBody.append('itemname', this.editingItem.name);
                  requestBody.append('value', this.editingItem.value);
                  requestBody.append('demand', this.editingItem.demand);
                  requestBody.append('description', this.editingItem.description);
                  requestBody.append('category', this.editingItem.category);
                  requestBody.append('image', this.selectedFile);
              } else {
                  headers['Content-Type'] = 'application/json';
                  requestBody = JSON.stringify({
                      id: this.editingItem._id,
                      itemname: this.editingItem.name,
                      value: this.editingItem.value,
                      demand: this.editingItem.demand,
                      description: this.editingItem.description,
                      category: this.editingItem.category
                  });
              }

              const response = await fetch('https://api.silverfoxvalues.com/admin/updateAdoptme', {
                  method: 'POST',
                  headers: headers,
                  body: requestBody
              });

              if (response.status === 401) {
                  localStorage.removeItem('token');
                  this.$router.push('/admin/login');
                  return;
              }

              const responseData = await response.json();

              if (!response.ok) {
                  throw new Error(`${responseData.error}`);
              }

              return responseData;

          } catch (error) {
              console.error('Error saving item:', error);
              throw error;
          }
      },

      async selectGame(gameKey) {
          this.selectedGame = gameKey
          this.selectedFilter = 'All'
          this.searchQuery = ''
          await this.fetchGameData()
      },
      async fetchGameData() {
          if (!this.games[this.selectedGame]) return
  
          this.loading = true
          this.error = null
  
          try {
              const response = await fetch(this.games[this.selectedGame].url)
              
              if (!response.ok) {
                  throw new Error(`HTTP error! status: ${response.status}`)
              }
              
              const data = await response.json()
              this.items = Array.isArray(data) ? data : data.items || []
              
              this.items = this.items.map((item, index) => ({
                  ...item,
                  id: item.id || index,
              }))
          
          } catch (err) {
              this.error = `Failed to fetch data: ${err.message}`
              this.items = []
          } finally {
              this.loading = false
          }
      },
      formatValue(value) {
          const numValue = Number(value) || 0
          if (numValue >= 1000000) {
              return `${(numValue / 1000000).toFixed(1)}M`
          } else if (numValue >= 1000) {
              return `${(numValue / 1000).toFixed(0)}K`
          }
          return numValue.toLocaleString()
      },
      formatFieldValue(value, format) {
          if (!value && value !== 0) return 'N/A'
          
          switch (format) {
              case 'currency':
                  return this.selectedGame == 'gag' ? this.formatValue(value) : Number(value).toLocaleString();
              case 'boolean':
                  return value === 'YES' || value === true ? 'Yes' : 'No'
              case 'badge':
              case 'text':
              default:
                  return value
          }
      },
      getRarityColor(rarity) {
          const rarityColors = {
              'Common': 'bg-gray-600',
              'Uncommon': 'bg-green-600',
              'Rare': 'bg-blue-600',
              'Epic': 'bg-purple-600',
              'Legendary': 'bg-yellow-600',
              'Mythic': 'bg-red-600'
          }
          return rarityColors[rarity] || 'bg-slate-600'
      }
    },
    beforeMount() {
      if(localStorage.getItem('token') == null) {
        return this.$router.push('/admin/login') 
      }
      this.hasToken = true
      this.fetchGameData()
    }
  }
</script>
<style>
.game-icon {
    position: relative;
    transition: all 0.3s ease;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    overflow: hidden;
}

.game-icon:hover {
    border-radius: 16px;
    transform: scale(1.05);
}

.game-icon.active {
    border-radius: 16px;
    box-shadow: 0 0 0 2px var(--accent);
}
</style>
  