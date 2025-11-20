const cache = new Map();
const CACHE_TTL = 5 * 60 * 1000; // 30 min

export default defineEventHandler(async (event) => {
    try {
        const { category } = getQuery(event) || {};
        const key = category || 'all';
        const now = Date.now();

        const cachedEntry = cache.get(key);

        if (cachedEntry) {
            // Serve old data immediately
            const isExpired = now > cachedEntry.expiry;
            if (isExpired) {
                setResponseHeader(event, 'Cache-Control', 'public, max-age=1800, stale-while-revalidate=180')
                refreshCache(key, category);
            }
            return { data: cachedEntry.data };
        }

        // No cache → fetch and store
        const shifted = await fetchAndShift(category);
        cache.set(key, { data: shifted, expiry: now + CACHE_TTL });
        setResponseHeader(event, 'Cache-Control', 'public, max-age=1800, stale-while-revalidate=180')
        return { data: shifted };

    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: `Failed to fetch adoptme values: ${error.message}`
        });
    }
});

async function fetchAndShift(category) {
    const externalApiUrl = `https://api.silverfoxvalues.com/growagarden?category=${encodeURIComponent(category)}`;
    const response = await fetch(externalApiUrl, { headers: { 'Content-Type': 'application/json' } });
    if (!response.ok) throw new Error(`API Error: ${response.status}`);
    
    const data = await response.json();
    return data
}

async function refreshCache(key, category) {
    try {
        const shifted = await fetchAndShift(category);
        cache.set(key, { data: shifted, expiry: Date.now() + CACHE_TTL });
    } catch (err) {
        console.error(`Failed to refresh cache for ${key}:`, err);
    }
}
