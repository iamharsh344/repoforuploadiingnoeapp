export default defineEventHandler(async (event) => {
  try {
    // This runs on server only - hidden from users
    const response = await fetch('https://api.silverfoxvalues.com/chat/getInitialMessages', {
      method: 'GET',
    })
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`)
    }
    
    const data = await response.json()

      return data 
    
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: `Failed to Sent chat: ${error.message}`
    })
  }
})
