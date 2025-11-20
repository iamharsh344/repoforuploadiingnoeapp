<template>
  <div class="fixed bottom-4 right-4 z-50">
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="transform scale-95 opacity-0 translate-y-4"
      enter-to-class="transform scale-100 opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="transform scale-100 opacity-100 translate-y-0"
      leave-to-class="transform scale-95 opacity-0 translate-y-4"
    >
      <div
        v-if="isOpen" class="mb-4 w-80 sm:w-96 h-[32rem] md:h-[36rem] bg-slate-900 border border-slate-700/50 rounded-xl shadow-2xl flex flex-col backdrop-blur-sm max-w-[calc(100vw-2rem)] max-h-[calc(100vh-6rem)]" style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);" >
        <div class="px-4 py-3 rounded-t-xl border-b border-slate-700/50 flex justify-between items-center shrink-0" style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%);">
          <div class="flex items-center space-x-2">
            <div class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <h3 class="text-slate-100 font-semibold text-sm">Live Chat</h3>
            <span class="text-xs text-slate-400 hidden sm:inline">Online</span>
          </div>
          <button
            @click="closeChat"
            class="text-slate-400 hover:text-slate-200 transition-colors p-1 rounded-md hover:bg-slate-700/50 ml-auto"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>

        <div
          ref="messagesContainer"
          class="flex-1 p-3 sm:p-4 bg-gray-850 overflow-y-auto space-y-4 min-h-0"
          style="background: linear-gradient(180deg, #1f2937 0%, #111827 100%);"
        >
          <div
            v-for="(message, index) in messages"
            :key="index"
            class="flex items-start space-x-3"
          >
            <div class="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center text-xs font-semibold">
              <img :src="message.avatar">
            </div>
            
            <div class="flex-1 min-w-0">
              <div class="flex items-center justify-between mb-1">
                <span class="font-medium text-sm text-gray-200">{{ message.username }}</span>
                <span class="text-xs text-gray-400 ml-2">{{ formatTime(message.timestamp) }}</span>
              </div>
              
              <div class="text-sm break-words text-gray-400">
                {{ message.message }}
              </div>
            </div>
          </div>
        </div>


        <div class="p-3 sm:p-3 rounded-b-xl border-t border-slate-700/50 shrink-0" style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%);">
          <div v-if="userLogined">
            <form @submit.prevent="sendMessage" class="flex space-x-2">
              <input
                v-model="newMessage"
                type="text"
                placeholder="Type your message..."
                class="flex-1 px-3 py-2 sm:py-2.5 bg-slate-800/80 border border-slate-600/50 rounded-lg text-slate-100 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all backdrop-blur-sm"
                :disabled="isLoading"
              />
              <button
                type="submit"
                :disabled="isLoading"
                class="px-3 sm:px-4 py-2 sm:py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 disabled:opacity-75 disabled:cursor-not-allowed transition-all text-sm font-medium shadow-lg flex-shrink-0"
              >
                <svg v-if="isLoading" class="w-4 h-4 animate-spin" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"></path>
                </svg>
                <svg v-else class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                </svg>
              </button>
            </form>
            <p v-show="error" class="text-red-400 text-sm mt-1.5">{{ errorMsg }}</p>

          </div>
          <div v-else class="text-center text-gray-300">
            Login to unlock chat
          </div>
        </div>
      </div>
    </transition>

    <div class="flex justify-end">
      <div
        :class="[
          'w-12 h-12 sm:w-14 sm:h-14 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 flex items-center justify-center group relative',
          isOpen ? 'self-end' : ''
        ]"
        style="background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #a855f7 100%);"
      >
        <button @click="toggleChat" aria-label="Open-chat" class="w-full h-full flex items-center justify-center relative z-10" >
          <div class="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-200" style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #c084fc 100%);"></div>
          
          <svg v-if="!isOpen" class="w-5 h-5 sm:w-6 sm:h-6 relative z-10" fill="currentColor" viewBox="0 0 20 20" >
            <path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd"></path>
          </svg>
          <svg v-else class="w-5 h-5 sm:w-6 sm:h-6 relative z-10" fill="currentColor" viewBox="0 0 20 20" >
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
          </svg>
        </button>

        <div
          v-if="!isOpen && unreadCount > 0"
          class="absolute -top-1 -left-1 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-bounce shadow-lg"
        >
          {{ unreadCount > 9 ? '9+' : unreadCount }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userLogined: false,
      isOpen: false,
      newMessage: '',
      isLoading: false,
      unreadCount: 0,
      messages: [],


      intervalId: null,
      error: false,
      errorMsg: null
    }
  },
  mounted() {
    if(localStorage.getItem('authToken')) this.userLogined = true
    this.load();

    this.startPolling()
  },
  methods: {
    toggleChat() {
      this.isOpen = !this.isOpen
      if (this.isOpen) {
        this.unreadCount = 0
        this.$nextTick(() => {
          this.scrollToBottom()
        })
      }
    },
    closeChat() {
      this.isOpen = false
    },
    async sendMessage() {
      if (!this.newMessage.trim()) return
      this.isLoading = true
      try {

        const response = await $fetch('/api/chat-sendmsg', {
          method: 'POST',
          body: {
            msg: this.newMessage,
            token: localStorage.getItem('authToken') || null
          }
        })

        this.messages.push(response.data)
        this.newMessage = ''
        this.isLoading = false
        this.$nextTick(() => {
          this.scrollToBottom()
        })

      } catch (error) {
        this.error = true
        this.errorMsg = error.statusMessage || error.message
      }
    },
    async load() {

      try {

        const response = await $fetch('/api/chat-InitialMessage', {
          method: 'GET'
        })
        this.messages = response.data

      } catch (error) {
      }
    },
    async loadAgain() {
      try {

        const len = this.messages.length-1
        const id = this.messages[len]._id
        const response = await $fetch('/api/chat-NewMessage', {
          method: 'POST',
          body: {
            lastMessageId: id
          }
        })
        
        if(response.data.length > 0) {
          this.unreadCount += 1;
          for (let i = 0; i < response.data.length; i++) {
              this.messages.push(response.data[i]);
          }
        }

      } catch (error) {
      }
    },


    scrollToBottom() {
      if (this.$refs.messagesContainer) {
        this.$refs.messagesContainer.scrollTop = this.$refs.messagesContainer.scrollHeight
      }
    },
    formatTime(timestamp) {
      const now = new Date()
      const messageTime = new Date(timestamp)
      const diffInSeconds = Math.floor((now - messageTime) / 1000)
      
      if (diffInSeconds < 60) {
        return 'Just now'
      } else if (diffInSeconds < 3600) {
        const minutes = Math.floor(diffInSeconds / 60)
        return `${minutes}m ago`
      } else if (diffInSeconds < 86400) {
        const hours = Math.floor(diffInSeconds / 3600)
        return `${hours}h ago`
      } else if (diffInSeconds < 2592000) {
        const days = Math.floor(diffInSeconds / 86400)
        return `${days}d ago`
      } else {
        const months = Math.floor(diffInSeconds / 2592000)
        return `${months}mo ago`
      }
    },


    startPolling() {
      this.stopPolling();
      this.intervalId = setInterval(() => {
        this.loadAgain();
      }, 5000);
    },

    stopPolling() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    }

  },
  beforeUnmount() {
    this.stopPolling();
  }
}
</script>
