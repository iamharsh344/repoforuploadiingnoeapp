export default defineEventHandler(async (event) => {
  try {
    const { msg, token } = await readBody(event)
    // This runs on server only - hidden from users
    const response = await fetch('https://api.silverfoxvalues.com/chat/sent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify({
          message: msg
      })
    })
    
    if (!response.ok) {
      const errorData = await response.json()
      throw createError({
        statusMessage: errorData.msg || "Something went wrong"
      })
    }
    
    const data = await response.json()

      return data 
    
  } catch (error) {
    if (error.statusCode) throw error
    
    // fallback for unknown errors
    throw createError({
      statusCode: 500,
      statusMessage: error.message || "Server error"
    })
  }
})
