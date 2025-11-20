// server/api/restaurant-values.ts
export default defineEventHandler(async (event) => {
    try {
      // This runs on server only - hidden from users
      const response = await fetch('https://api.silverfoxvalues.com/myRestaurantValues', {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      
      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`)
      }
      
      const data = await response.json()

      setResponseHeader(event, 'Cache-Control', 'public, max-age=1800, stale-while-revalidate=180')
      return data
      
    } catch (error) {
      throw createError({
        statusCode: 500,
        statusMessage: `Failed to fetch restaurant values: ${error.message}`
      })
    }
  })
  