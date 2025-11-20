<template>
    <div class="min-h-screen body text-slate-200">
      <main-Header />
      <div class="pt-32 pb-12 text-center">
        <div class="container mx-auto px-6">
          <h1 class="text-4xl md:text-7xl font-bold mb-4">
            Welcome to SilverFoxValues
          </h1>
          <p class="text-lg md:text-2xl mb-8 opacity-90">
            Your ultimate destination for Roblox game values & giveaways!
          </p>
          <div class="animate-pulse">
            <i class="fas fa-gamepad text-4xl mb-4"></i>
            <p class="text-lg">Discover the latest values and win amazing prizes!</p>
          </div>
        </div>
      </div>
  
      <div v-show="tab" class="modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4" @click="tab = false">
          <div class="modal-content rounded-xl max-w-4xl w-full p-6 relative overflow-y-auto" @click.stop>
              <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
                  <nuxt-link to="/growagarden/calculator" class="category-card bg-gray-900 border border-gray-700 rounded-lg overflow-hidden cursor-pointer">
                      <img src="/games/gag/calculator.webp" alt="Weather" loading="lazy" class="w-full h-28 sm:h-32 md:h-40 object-cover" />
                      <h4 class="text-center  font-semibold text-lg py-1.5">Pets Calculator</h4>
                  </nuxt-link>

                  <nuxt-link to="/growagarden/live-stock" class="category-card bg-green-400 border border-gray-700 rounded-lg overflow-hidden cursor-pointer">
                      <img src="/games/gag/stock.webp" alt="Livestock" loading="lazy" class="w-full h-28 sm:h-32 md:h-40 object-cover" />
                      <h4 class="text-center text-black font-semibold text-lg py-1.5">Livestock</h4>
                  </nuxt-link>

                  <nuxt-link to="/growagarden/pets" class="category-card bg-gray-900 border border-gray-700 rounded-lg overflow-hidden cursor-pointer">
                      <img src="/games/gag/pets.webp" alt="Pets" loading="lazy" class="w-full h-28 sm:h-32 md:h-40 object-cover" />
                      <h4 class="text-center  font-semibold text-lg py-1.5">Pets</h4>
                  </nuxt-link>

                  <nuxt-link to="/growagarden/plants" class="category-card bg-gray-900 border border-gray-700 rounded-lg overflow-hidden cursor-pointer">
                      <img src="/games/gag/plants.webp" alt="Plants" loading="lazy" class="w-full h-28 sm:h-32 md:h-40 object-cover" />
                      <h4 class="text-center  font-semibold text-lg py-1.5">Plants</h4>
                  </nuxt-link>

                  <nuxt-link to="/growagarden/gears" class="category-card bg-gray-900 border border-gray-700 rounded-lg overflow-hidden cursor-pointer">
                      <img src="/games/gag/gears.webp" alt="Crops"  loading="lazy" class="w-full h-28 sm:h-32 md:h-40 object-cover" />
                      <h4 class="text-center  font-semibold text-lg py-1.5">Gears</h4>
                  </nuxt-link>

                  <nuxt-link to="/growagarden/mutations" class="category-card bg-gray-900 border border-gray-700 rounded-lg overflow-hidden cursor-pointer">
                      <img src="/games/gag/mutation.webp" alt="Mutations" loading="lazy" class="w-full h-28 sm:h-32 md:h-40 object-cover"/>
                      <h4 class="text-center  font-semibold text-lg py-1.5">Mutations</h4>
                  </nuxt-link>
                  
              </div>
          </div>
      </div>

      <div class="container mx-auto px-6 pb-12">
          <section class="mb-12">
            <h2 class="text-4xl font-bold  text-center mb-8 flex justify-center items-center gap-2.5">
              <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="m10.667 6.134l-.502-.355A4.24 4.24 0 0 0 7.715 5h-.612c-.405 0-.813.025-1.194.16c-2.383.846-4.022 3.935-3.903 10.943c.024 1.412.354 2.972 1.628 3.581A3.2 3.2 0 0 0 5.027 20a2.74 2.74 0 0 0 1.53-.437c.41-.268.77-.616 1.13-.964c.444-.43.888-.86 1.424-1.138a4.1 4.1 0 0 1 1.89-.461H13c.658 0 1.306.158 1.89.46c.536.279.98.709 1.425 1.139c.36.348.72.696 1.128.964c.39.256.895.437 1.531.437a3.2 3.2 0 0 0 1.393-.316c1.274-.609 1.604-2.17 1.628-3.581c.119-7.008-1.52-10.097-3.903-10.942C17.71 5.025 17.3 5 16.897 5h-.612a4.24 4.24 0 0 0-2.45.78l-.502.354a2.31 2.31 0 0 1-2.666 0M16.75 9a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m-9.25.25a.75.75 0 0 1 .75.75v.75H9a.75.75 0 0 1 0 1.5h-.75V13a.75.75 0 0 1-1.5 0v-.75H6a.75.75 0 0 1 0-1.5h.75V10a.75.75 0 0 1 .75-.75m11.5 2a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-3.75.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m2.25.75a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0" clip-rule="evenodd"/></svg>Game Values
            </h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

              <div class="gamer-card rounded-2xl p-8 text-center">
                <img alt="game-mr" fetchpriority="high"  width="600" height="300" src="/games/mr.webp" class="mx-auto mb-4 rounded-lg shadow-lg w-full max-h-40 object-cover" />
                <h3 class="text-2xl font-bold  mb-2">My Restaurant</h3>
                <p class="text-gray-200 mb-4">Discover food and equipment values</p>
                <button @click="viewGameValues('myrestaurantvalues')" class="game-button w-full py-3 px-6 rounded-xl  font-bold text-lg relative overflow-hidden">
                  View Values
                </button>
              </div>

              <div class="gamer-card rounded-2xl p-8 text-center">
                <img alt="game-gag" fetchpriority="high"  width="600" height="300" src="/games/gag.webp" class="mx-auto mb-4 rounded-lg shadow-lg w-full max-h-40 object-cover" />
                <h3 class="text-2xl font-bold  mb-2">Grow a Garden</h3>
                <p class="text-gray-200 mb-4">Check the latest pet and item values</p>
                <button @click="tab = true" class="game-button w-full py-3 px-6 rounded-xl  font-bold text-lg relative overflow-hidden">
                  View Values
                </button>
              </div>
              
              <div class="gamer-card rounded-2xl p-8 text-center">
                <img alt="game-adoptme" fetchpriority="high"  width="600" height="300" src="/games/adoptme.webp" class="mx-auto mb-4 rounded-lg shadow-lg w-full max-h-40 object-cover" />
                <h3 class="text-2xl font-bold  mb-2">Adoptme</h3>
                <p class="text-gray-200 mb-4">Check the latest pet and item values</p>
                <button @click="viewGameValues('adoptme')" class="game-button w-full py-3 px-6 rounded-xl  font-bold text-lg relative overflow-hidden">
                  View Values
                </button>
              </div>

              <div class="gamer-card rounded-2xl p-8 text-center">
                <img alt="game-stalbrainroot" fetchpriority="high"  width="600" height="300" src="/games/stealabrainroot.webp" class="mx-auto mb-4 rounded-lg shadow-lg w-full max-h-40 object-cover" />
                <h3 class="text-2xl font-bold  mb-2">Steal Brainrot</h3>
                <p class="text-gray-200 mb-4">Check the latest pet and item values</p>
                <button @click="viewGameValues('steal-brainrot')" class="game-button w-full py-3 px-6 rounded-xl  font-bold text-lg relative overflow-hidden">
                  View Values
                </button>
              </div>

            </div>
          </section>
    
          <section class="mb-12">
            <h2 class="text-4xl font-bold  text-center mb-8">
              <i class="fas fa-gift mr-3"></i>Active Giveaways
            </h2>
            <div class="flex justify-center mt-5">
              <div class="flex sm:flex-row flex-col mt-2.5 gap-2.5"> 
                <a href="https://discord.gg/dg6Ec6zprT" class="block text-center w-fit text-gray-950 font-semibold bg-blue-200 p-1 rounded-xl">
                  <p>Ends on Wednesday</p>
                      <img class="w-64" alt="Dragonfly" src="/Giveaway/g2.jpeg">
                  </a>
                  <a href="https://discord.gg/dg6Ec6zprT" class="block text-center w-fit text-gray-950 font-semibold bg-green-200 p-1 rounded-xl">
                    <p>Starts from Wednesday</p>
                      <img class="w-64" alt="Dragonfly" src="/Giveaway/g1.jpeg">
                  </a>
                  <a href="https://discord.gg/dg6Ec6zprT" class="block text-center w-fit text-gray-950 font-semibold bg-yellow-200 p-1 rounded-xl">
                    <p>Weekly Giveaway  </p>
                      <img class="w-64" alt="Dragonfly" src="/Giveaway/g3.jpeg">
                  </a>
              </div>
          </div>
          </section>

          <section class="mb-12">
            <h2 class="text-4xl font-bold  text-center mb-8">
              <i class="fas fa-gift mr-3"></i>Previous Giveaways
            </h2>
            <div class="flex justify-center mt-5">
              <div class="flex mt-2.5"> 
                  <div class="flex items-center">
                      <img class="w-52" alt="Dragonfly" src="/Giveaway/Dragonfly.webp">
                  </div>
                  <div class="flex items-center">
                      <img class="w-52" alt="DiscoBeeIcon" src="/Giveaway/DiscoBeeIcon.gif">
                  </div>
                  <div class="flex items-center">
                      <img class="w-24" alt="Racoon" src="/Giveaway/Raccon.webp">
                  </div>
              </div>
          </div>
          </section>

          <section class="relative z-10 overflow-hidden bg-[#1B1A44] py-16 px-8 mt-40">
              <div class="container">
                  <div class="-mx-4 flex flex-wrap items-center">
                      <div class="w-full px-4 lg:w-1/2">
                          <div class="text-center lg:text-left ">
                              <div class="mb-10 lg:mb-0 ">
                                  <div
                                      class="mt-0 mb-3 text-3xl font-bold leading-tight sm:text-xl md:text-4xl text-white ">
                                      The Ultimate Roblox Trading Spot<br>
          <span class="text-sm">A single place to post trades, see what others offer, check game values, and make the best deals.</span></div>
                                  <p
                                      class="w-full text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed text-white">
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div class="w-full px-4 lg:w-1/2">
                          <div class="text-center lg:text-right">
                            <div class="flex justify-end">
                              <a class="game-button block w-fit py-3 px-6 rounded-xl  font-bold text-lg relative overflow-hidden" href="https://robloxvalueshub.com/trade?utm_source=share&utm_campaign=silverfoxvalues">Start Trading 🚀</a>
                            </div>
                          </div>
                      </div>
                  </div>
              </div>
              <span class="absolute top-0 right-0 -z-10">
                  <svg width="388" height="250" viewBox="0 0 388 220" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.05" d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z" fill="url(#paint0_linear_971_6910)"></path><defs><linearGradient id="paint0_linear_971_6910" x1="60.5" y1="111" x2="287" y2="111" gradientUnits="userSpaceOnUse"><stop offset="0.520507" stop-color="white"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient></defs></svg></span><span class="absolute top-0 right-0 -z-10"><svg width="324" height="250" viewBox="0 0 324 220" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.05" d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z" fill="url(#paint0_linear_971_6911)"></path><defs><linearGradient id="paint0_linear_971_6911" x1="60.5" y1="111" x2="287" y2="111" gradientUnits="userSpaceOnUse"><stop offset="0.520507" stop-color="white"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient></defs></svg></span><span class="absolute top-4 left-4 -z-10"><svg width="43" height="56" viewBox="0 0 43 56" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.5"><circle cx="40.9984" cy="1.49626" r="1.49626" transform="rotate(90 40.9984 1.49626)" fill="white"></circle><circle cx="27.8304" cy="1.49626" r="1.49626" transform="rotate(90 27.8304 1.49626)" fill="white"></circle><circle cx="14.6644" cy="1.49626" r="1.49626" transform="rotate(90 14.6644 1.49626)" fill="white"></circle><circle cx="1.49642" cy="1.49626" r="1.49626" transform="rotate(90 1.49642 1.49626)" fill="white"></circle><circle cx="40.9984" cy="14.6642" r="1.49626" transform="rotate(90 40.9984 14.6642)" fill="white"></circle><circle cx="27.8304" cy="14.6642" r="1.49626" transform="rotate(90 27.8304 14.6642)" fill="white"></circle><circle cx="14.6644" cy="14.6642" r="1.49626" transform="rotate(90 14.6644 14.6642)" fill="white"></circle><circle cx="1.49642" cy="14.6642" r="1.49626" transform="rotate(90 1.49642 14.6642)" fill="white"></circle><circle cx="40.9984" cy="27.8302" r="1.49626" transform="rotate(90 40.9984 27.8302)" fill="white"></circle><circle cx="27.8304" cy="27.8302" r="1.49626" transform="rotate(90 27.8304 27.8302)" fill="white"></circle><circle cx="14.6644" cy="27.8302" r="1.49626" transform="rotate(90 14.6644 27.8302)" fill="white"></circle><circle cx="1.49642" cy="27.8302" r="1.49626" transform="rotate(90 1.49642 27.8302)" fill="white"></circle><circle cx="40.9984" cy="40.9982" r="1.49626" transform="rotate(90 40.9984 40.9982)" fill="white"></circle><circle cx="27.8304" cy="40.9963" r="1.49626" transform="rotate(90 27.8304 40.9963)" fill="white"></circle><circle cx="14.6644" cy="40.9982" r="1.49626" transform="rotate(90 14.6644 40.9982)" fill="white"></circle><circle cx="1.49642" cy="40.9963" r="1.49626" transform="rotate(90 1.49642 40.9963)" fill="white"></circle><circle cx="40.9984" cy="54.1642" r="1.49626" transform="rotate(90 40.9984 54.1642)" fill="white"></circle><circle cx="27.8304" cy="54.1642" r="1.49626" transform="rotate(90 27.8304 54.1642)" fill="white"></circle><circle cx="14.6644" cy="54.1642" r="1.49626" transform="rotate(90 14.6644 54.1642)" fill="white"></circle><circle cx="1.49642" cy="54.1642" r="1.49626" transform="rotate(90 1.49642 54.1642)" fill="white"></circle></g>
                  </svg>
              </span>
          </section>
      </div>

      
      <div class="relative py-8 bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-sm">
        <div class="text-center mb-6">
          <h2 class="text-2xl font-bold  mb-2">Our Contributors</h2>
          <p class="text-purple-200">Amazing people who make our platform better</p>
        </div>
        
        <div class="contributors-scroll-container">
          <div class="contributors-track">
            <!-- First set of contributors -->
            <div 
              v-for="contributor in contributors" 
              :key="`first-${contributor.id}`"
              class="contributor-item"
            >
              <div class="contributor-card">
                <img 
                  :src="contributor.logo" 
                  :alt="contributor.name"
                  loading="lazy"
                  class="w-16 h-16 rounded-full object-cover border-3 border-white/20 shadow-lg"
                >
                <span class="contributor-name">{{ contributor.name }}</span>
              </div>
            </div>
            
            <!-- Duplicate set for seamless scrolling -->
            <div 
              v-for="contributor in contributors" 
              :key="`second-${contributor.id}`"
              class="contributor-item"
            >
              <div class="contributor-card">
                <img 
                  :src="contributor.logo" 
                  :alt="contributor.name"
                  loading="lazy"
                  class="w-16 h-16 rounded-full object-cover border-3 border-white/20 shadow-lg"
                >
                <span class="contributor-name">{{ contributor.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main-Footer />
    
        <div 
          v-for="particle in particles" 
          :key="particle.id"
          class="fixed w-2 h-2 bg-white opacity-30 rounded-full pointer-events-none particle"
          :style="particle.style"
        ></div>
    </div>
  </template>
  
<script>
export default {
    setup() {
      useHead({
          title: 'SilverFoxValues | #1 Roblox Game Values & Trading Platform',
          htmlAttrs: {
              lang: 'en'
          },
          meta: [
              { name: 'google-adsense-account', content: 'ca-pub-2625601725317470' },
              { name: 'robots', content: 'index,follow' },
              { hid: 'description', name: 'description', content: 'The most trusted source for Roblox game values and trading tools. Track accurate prices for Grow a Garden, Steal a Brainrot, and more games. Weekly updates, trade calculators, and comprehensive item databases.' },
              { hid: 'keywords', name: 'keywords', content: 'adoptme values, Roblox values, Roblox trading, Grow a Garden values, adoptme pets values, gag pet values, item values, Roblox trade calculator, game values, Roblox price guide' },
              { name: 'author', content: 'SilverFoxValues' },
              { name: 'viewport', content: 'width=device-width, initial-scale=1' },
              
              { hid: 'og:type', property: 'og:type', content: 'website' },
              { hid: 'og:title', property: 'og:title', content: 'SilverFoxValues | #1 Roblox Game Values & Trading Platform' },
              { hid: 'og:description', property: 'og:description', content: 'Discover accurate Roblox game values for pets, items, and characters. Use our trading tools and weekly updated databases to dominate the Roblox trading scene.' },
              { hid: 'og:url', property: 'og:url', content: 'https://silverfoxvalues.com/' },
              { hid: 'og:site_name', property: 'og:site_name', content: 'SilverFoxValues' },
              
              { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
              { hid: 'twitter:title', name: 'twitter:title', content: 'SilverFoxValues – Your Ultimate Roblox Trading Companion' },
              { hid: 'twitter:description', name: 'twitter:description', content: 'Get the most accurate Roblox game values and trading tools. Track prices for multiple games, use our calculators, and trade smarter than ever.' },
              
              { name: 'theme-color', content: '#1a202c' },
              { name: 'apple-mobile-web-app-capable', content: 'yes' },
              { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }
          ]
      })
  },
    data() {
    return {
        tab: false,
        giveaways: [
        {
            id: 1,
            title: 'Legendary Pet',
            endTime: 'Ends in 2 days',
            image: 'ghjdg.png'
        },
        {
            id: 2,
            title: 'Rare Equipment',
            endTime: 'Ends in 5 days',
            image: 'fas fa-gem text-purple-500'
        },
        {
            id: 3,
            title: 'In-Game Currency',
            endTime: 'Ends in 1 week',
            image: 'fas fa-coins text-yellow-400'
        },
        ],
        contributors: [
        {
            id: 1,
            name: 'Farmerjimmy',
            logo: '/contributors/farmerjimmy.webp',
        },
        {
            id: 2,
            name: 'Lachythebear',
            logo: '/contributors/lachythebear.webp',
        },
        {
            id: 3,
            name: 'P0tatoch1q',
            logo: '/contributors/p0tatoch1q.webp',
        },
        {
            id: 4,
            name: 'Ray211008',
            logo: '/contributors/ray211008.webp',
        },
        {
            id: 5,
            name: 'Richie',
            logo: '/contributors/richie.webp',
        },
        {
            id: 6,
            name: 'Sai',
            logo: '/contributors/sai.webp',
        },
        {
            id: 6,
            name: 'Sckyee',
            logo: '/contributors/sckyee.webp',
        },
        {
            id: 6,
            name: 'Subdoesmr',
            logo: '/contributors/subdoesmr.webp',
        }
        ],
        particles: [],
        particleInterval: null
    }
    },
    
    mounted() {
        this.particleInterval = setInterval(this.createParticle, 1500)
    },
    beforeUnmount() {
        // Clean up interval
        if (this.particleInterval) {
            clearInterval(this.particleInterval)
        }
    },
    methods: {
    viewGameValues(gameId) {
        this.$router.push(`/${gameId}/`)
    },
    enterGiveaway() {
        window.open('https://discord.gg/dg6Ec6zprT', '_blank')
    },
    openDiscord() {
        window.open('https://discord.gg/dg6Ec6zprT', '_blank')
    },
    createParticle() {
        const particle = {
        id: Date.now() + Math.random(),
        style: {
            left: Math.random() * window.innerWidth + 'px',
            bottom: '0px',
            animation: 'float-up 8s linear forwards'
        }
        }
        this.particles.push(particle)

        // Remove particle after animation
        setTimeout(() => {
        const index = this.particles.findIndex(p => p.id === particle.id)
        if (index > -1) {
            this.particles.splice(index, 1)
        }
        }, 8000)
    }
    }
}
</script>
  
<style scoped>
.contributors-scroll-container {
  width: 100%;
  overflow-x: hidden;
  position: relative;
  padding: 10px 0 10px;
}

.contributors-track {
  display: flex;
  width: calc(200% + 40px);
  animation: scroll-left 25s linear infinite;
  gap: 2rem;
}

.contributor-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contributor-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  min-width: 120px;
}

.contributor-card:hover {
  transform: translateY(-4px);
  background: rgba(255, 255, 255, 0.15);
}

.contributor-name {
  font-weight: 600;
  color: white;
  text-align: center;
  font-size: 0.875rem;
  line-height: 1.2;
}

@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.contributors-scroll-container:hover .contributors-track {
  animation-play-state: paused;
}
</style>