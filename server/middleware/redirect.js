// ~/server/middleware/redirect.js
export default defineEventHandler((event) => {
    if (event.path === '/growagarden/pets/index.html') {
      return sendRedirect(event, '/growagarden/pets/', 301)
    }
  })
  