// server/api/restaurant-values.ts
export default defineEventHandler(async (event) => {
    try {
      // This runs on server only - hidden from users
      const response = await fetch('https://gagstock.gleeze.com/grow-a-garden', {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      
      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`)
      }
      
      const data = await response.json()
      return { data: data.data }
    
    //   return data
      
    } catch (error) {
      throw createError({
        statusCode: 500,
        statusMessage: `Failed to fetch restaurant values: ${error.message}`
      })
    }
  })
  