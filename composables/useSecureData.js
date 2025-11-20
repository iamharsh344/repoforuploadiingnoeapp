// composables/useSecureData.js
export const useSecureData = () => {
    const decodeData = (shiftedData) => {
      try {
        // Reverse the character shift
        const original = shiftedData.split('').map(char => 
          String.fromCharCode(char.charCodeAt(0) - 3)
        ).join('')
        
        return JSON.parse(original)
      } catch (error) {
        console.error('Failed to decode data:', error)
        return []
      }
    }
    
    return { decodeData }
  }
  