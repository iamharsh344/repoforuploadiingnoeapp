<template>
  <div class="min-h-screen" style="background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #000000 100%);">
    <main-Header />
    
    <div class="container mx-auto px-4 py-8 pt-32">
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">Game Blog</h1>
        <p class="text-purple-200 text-lg max-w-2xl mx-auto">
          Latest gaming news, guides, and updates for your favorite games
        </p>
      </div>

      <div class="max-w-7xl mx-auto">
        <div class="mb-10">
          <div class="max-w-2xl mx-auto mb-8">
            <div class="relative">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search blog posts..."
                class="w-full px-6 py-4 pl-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
              />
              <div class="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-200">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <button
                v-if="searchQuery"
                @click="searchQuery = ''"
                class="absolute right-4 top-1/2 transform -translate-y-1/2 text-purple-200 hover:text-white transition-colors duration-200"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>

          <div class="flex flex-wrap justify-center gap-4">
            <button
              @click="activeGame = 'all'"
              :class="[
                'px-8 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105',
                activeGame === 'all' 
                  ? 'text-white shadow-lg shadow-gray-800' 
                  : 'bg-white/10 backdrop-blur-sm text-purple-200 hover:bg-white/20'
              ]"
              :style="[activeGame === 'all' ? 'background: linear-gradient(45deg, #1e1b4b, #1e1b4b)': '']"
            >
              All Posts
            </button>
            <button
              @click="activeGame = 'Grow a Garden'"
              :class="[
                'px-8 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105',
                activeGame === 'Grow a Garden' 
                  ? 'text-white shadow-lg shadow-gray-800' 
                  : 'bg-white/10 backdrop-blur-sm text-purple-200 hover:bg-white/20'
              ]"
              :style="[activeGame === 'Grow a Garden' ? 'background: linear-gradient(45deg, #000000, #1e1b4b)': '']"
            >
              Grow a Garden
            </button>
            <button
              @click="activeGame = 'My Restaurant'"
              :class="[
                'px-8 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105',
                activeGame === 'My Restaurant' 
                  ? 'text-white shadow-lg shadow-gray-800' 
                  : 'bg-white/10 backdrop-blur-sm text-purple-200 hover:bg-white/20'
              ]"
              :style="[activeGame === 'My Restaurant' ? 'background: linear-gradient(45deg, #000000, #1e1b4b)': '']"
            >
            My Restaurant
            </button>
          </div>
        </div>

        <div class="text-center mb-8">
          <p class="text-purple-200">
            <span v-if="searchQuery || activeGame !== 'all'">
              {{ searchQuery ? `for "${searchQuery}"` : '' }}
              {{ activeGame !== 'all' ? `in ${activeGame}` : '' }}
            </span>
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="post in filteredPosts"
            :key="post.id"
            class="group bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-white/20"
          >
            <div class="relative h-48 bg-gradient-to-br from-purple-600 to-blue-600 overflow-hidden">
              <img
                v-if="post.image"
                :src="post.image"
                :alt="post.title"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              >
              <img v-else
              src="/blogs/Grow+a+Garden.webp"
              alt="grow a garden"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              >
              <div class="absolute top-4 left-4">
                <span
                  :class="[
                    'px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg',
                    getGameBadgeColor(post.game)
                  ]"
                >
                  {{ post.game }}
                </span>
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            <div class="p-6">
              <h3 class="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-orange-300 transition-colors duration-300">
                {{ post.title }}
              </h3>
              <p class="text-purple-200 mb-4 line-clamp-3">
                {{ post.excerpt }}
              </p>
              <div class="flex items-center justify-between">
                <span class="text-purple-300 text-sm font-medium">
                  {{ formatDate(post.date) }}
                </span>
                <NuxtLink
                  :to="post.slug"
                  class="text-white px-6 py-2 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  style="background: linear-gradient(45deg, #000000, #1e1b4b);"
                >
                  Read More
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <div
          v-if="filteredPosts.length === 0"
          class="text-center py-16"
        >
          <div class="text-purple-300 text-xl mb-4">
            No posts found
          </div>
          <p class="text-purple-200 mb-6">
            Try adjusting your search terms or category filter
          </p>
          <button
            @click="clearFilters"
            class="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Clear All Filters
          </button>
        </div>
      </div>
    </div>

    <main-Footer />
  </div>
</template>

<script setup>
const blogPosts = ref([
  {
    id: 1,
    title: "⚙️ Best Early-Game Setup in Grow a Garden (GAG)",
    excerpt: "Getting ahead early in Grow a Garden 🌱 is all about smart plot placement, upgrade priorities, and tight planting cycles...",
    game: "Grow a Garden",
    slug: "/growagarden/Best-Early-Game-Setup-in-Grow-a-Garden",
    date: "2025-08-19",
  },
  {
    id: 2,
    title: "🐾 How to Get Rare Pets in Grow a Garden",
    excerpt: "Rare pets in Grow a Garden add powerful bonuses and style to your garden. This guide explains the best ways to increase your chances...",
    game: "Grow a Garden",
    slug: "/growagarden/How-to-Get-Rare-Pets-in-Grow-a-Garden",
    date: "2025-08-19",
    image: "/blogs/Pet_Egg_stand.webp"
  },
  {
    id: 3,
    title: "🌑 Eclipse Mutation Guide Grow a Garden",
    excerpt: "The Eclipse Mutation 🌑 is a rare global event in Grow a Garden that temporarily boosts crop value and enables special mutation outcomes.",
    game: "Grow a Garden",
    slug: "/growagarden/Eclipse-Mutation-Guide",
    date: "2025-08-19",
    image: "/blogs/Fraer.webp"
  },
  {
    id: 4,
    title: "🌱 How to Get Romanesco in Grow a Garden",
    excerpt: "The Romanesco seed is one of the rarest items in Grow a Garden, belonging to the Prismatic rarity. Getting it can be tricky but ",
    game: "Grow a Garden",
    slug: "/growagarden/How-to-Get-Romanesco-in-Grow-a-Garden",
    date: "2025-08-19",
    image: "/blogs/RomanescoProduce.webp"
  },
  {
    id: 5,
    title: "⚡ How to Farm Faster in Grow a Garden",
    excerpt: "Farming in Grow a Garden is the core of progression. The faster you farm, the more seeds, pets, and resources you unlock.",
    game: "Grow a Garden",
    slug: "/growagarden/How-to-Farm-Faster",
    date: "2025-08-19",
    image: "/blogs/Wiki.webp"
  },
  {
    id: 6,
    title: "💰 Best Money-Making Crops in Mid-Game (GAG)",
    excerpt: "Mid-game in Grow a Garden 🌱 is where farming starts to get serious. Upgrades become more expensive...",
    game: "Grow a Garden",
    slug: "/growagarden/Best-Money-Making-Crops-in-Mid-Game-in-Grow-a-Garden",
    date: "2025-08-19",
  },
  {
    id: 7,
    title: "🏆 How to Prestige Efficiently in Grow a Garden (GAG)",
    excerpt: "Prestiging (also called Rebirth) in Grow a Garden 🌱🏆 is the key mechanic that resets your farm in exchange for permanent...",
    game: "Grow a Garden",
    slug: "/growagarden/How-to-Prestige-Rebirth-Efficiently-in-Grow-a-Garden",
    date: "2025-08-21",
  },
  {
    id: 8,
    title: "🎁 All Active Grow a Garden Codes",
    excerpt: "Codes in Grow a Garden are the best way to get a head start and boost your farming journey. Developers release these codes...",
    game: "Grow a Garden",
    slug: "/growagarden/All-Active-Grow-a-Garden-Codes",
    date: "2025-08-26",
  },
  {
    id: 9,
    title: "💸 Insane Layouts That Print Cash And How to Copy Them",
    excerpt: "Discover the best money-making layouts in Roblox My Restaurant and learn step-by-step how to set them up yourself...",
    game: "My Restaurant",
    slug: "/myrestaurantvalues/Insane-Layouts-That-Print-Cash-And-How-to-Copy-Them",
    date: "2025-08-29",
    image: '/blogs/mr-blog.jpg'

  },
  {
    id: 10,
    title: "🚀 Every Update Ranked! Which My Restaurant Event Was the GOAT?",
    excerpt: "We rate every major update in Roblox My Restaurant and reveal which ones changed the game forever...",
    game: "My Restaurant",
    slug: "/myrestaurantvalues/Every-Update-Ranked-Which-My-Restaurant-Event-Was-the-GOAT",
    date: "2025-08-29",
    image: '/blogs/Taco_Truck.webp'
  },
  {
    id: 11,
    title: "🍔 From Noob Chef to Restaurant King 👑",
    excerpt: "A complete step by step journey to becoming the ultimate Restaurant Tycoon in Roblox My Restaurant...",
    game: "My Restaurant",
    slug: "/myrestaurantvalues/From-Noob-Chef-to-Restaurant-King",
    date: "2025-08-29",
    image: '/blogs/mr-blog.jpg'
  },
  {
    id: 12,
    title: "🌱 See Live Stock Items in Grow a Garden (Eggs, Seeds & More!)",
    excerpt: "Track the live stock system in Roblox Grow a Garden from eggs to seeds, and discover how it helps your farming journey...",
    game: "Grow a Garden",
    slug: "/growagarden/See-Live-Stock-Items-in-Grow-a-Garden-Roblox",
    date: "2025-08-29",
    image: '/blogs/Screenshot_livestock.png'
  }
])

const activeGame = ref('all')
const searchQuery = ref('')

const filteredPosts = computed(() => {
  let posts = [...blogPosts.value].reverse()
  
  // Filter by category
  if (activeGame.value !== 'all') {
    posts = posts.filter(post => post.game === activeGame.value)
  }
  
  // Filter by search query
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase().trim()
    posts = posts.filter(post => 
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.game.toLowerCase().includes(query)
    )
  }
  
  return posts
})

const clearFilters = () => {
  activeGame.value = 'all'
  searchQuery.value = ''
}

const getGameBadgeColor = (game) => {
  const colors = {
    valorant: 'bg-gradient-to-r from-red-500 to-pink-500 text-white',
    minecraft: 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
  }
  return colors[game] || 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
}

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString(undefined, options)
}

useHead({
  title: 'Gaming Blog - My Restaurant & Grow a Garden Guides | SilverFoxValues',
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
      { name: 'google-adsense-account', content: 'ca-pub-2625601725317470' },
      { name: 'robots', content: 'index,follow' },
      { hid: 'description', name: 'description', content: 'Master My Restaurant and Grow a Garden with our comprehensive guides, tips, and strategies. Get the latest updates, trading advice, and expert gameplay tutorials for both Roblox games.' },
      { hid: 'keywords', name: 'keywords', content: 'adoptme values, how to do gag, Roblox trading, Grow a Garden values, adoptme pets values, gag blogs, mutations grow a garden guide, grow a garden roblux, gag roblux, Roblox price guide' },
      { name: 'author', content: 'SilverFoxValues' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: 'Gaming Blog - My Restaurant & Grow a Garden Guides | SilverFoxValues' },
      { hid: 'og:description', property: 'og:description', content: 'Master My Restaurant and Grow a Garden with our comprehensive guides, tips, and strategies. Get the latest updates, trading advice, and expert gameplay tutorials for both Roblox games.' },
      { hid: 'og:url', property: 'og:url', content: 'https://silverfoxvalues.com/blogs' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'SilverFoxValues' },
      
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Gaming Blog - My Restaurant & Grow a Garden Guides | SilverFoxValues' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Master My Restaurant and Grow a Garden with our comprehensive guides, tips, and strategies. Get the latest updates, trading advice, and expert gameplay tutorials for both Roblox games.' },
      
      { name: 'theme-color', content: '#1a202c' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }
  ]
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
