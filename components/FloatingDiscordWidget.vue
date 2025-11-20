<template>
    <div class="fixed bottom-5 right-5 z-[9999]">
      <button 
        @click="toggleWidget" 
        class="w-15 h-15 p-2 shadow-lg shadow-[#8781e8] rounded-full bg-indigo-600 text-white border-none cursor-pointer flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-indigo-700 hover:scale-110 hover:shadow-xl"
        aria-label="Open-discord"
        >
      <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.1.1 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.1 16.1 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"/></svg>
      </button>
  
      <transition
        enter-active-class="transition-opacity duration-300 ease-out"
        leave-active-class="transition-opacity duration-300 ease-out"
        enter-from-class="opacity-0"
        leave-to-class="opacity-0"
      >
        <div v-if="showWidget" class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[9998]" @click="closeWidget">
          <div class="bg-gray-800 rounded-xl shadow-2xl overflow-hidden w-[90vw] max-w-md h-[90vh] max-h-[600px] flex flex-col" @click.stop>
            
            <div class="flex-1 relative">
              <iframe 
                :src="widgetUrl"
                class="w-full h-full"
                allowtransparency="true"
                frameBorder="0"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              />
            </div>
            <a href="https://discord.gg/dg6Ec6zprT" target="_blank" class="w-full bg-[#5865F2] text-center py-2.5">Join Discord</a>
          </div>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FloatingDiscordWidget',
    props: {
      serverId: {
        type: String,
        default: '1229795664045539368'
      },
      theme: {
        type: String,
        default: 'dark'
      }
    },
    data() {
      return {
        showWidget: false
      }
    },
    computed: {
      widgetUrl() {
        return `https://discord.com/widget?id=${this.serverId}&theme=${this.theme}`;
      }
    },
    methods: {
      toggleWidget() {
        this.showWidget = !this.showWidget;
      },
      closeWidget() {
        this.showWidget = false;
      },
      handleEscape(event) {
        if (event.key === 'Escape' && this.showWidget) {
          this.closeWidget();
        }
      }
    },
    mounted() {
      document.addEventListener('keydown', this.handleEscape);
    },
    beforeUnmount() {
      document.removeEventListener('keydown', this.handleEscape);
    }
  }
  </script>
  