import { Redis } from '@upstash/redis'

// Initialize Redis with environment variables
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN
})

export default async function handler(req, res) {
  // Increment the visitor count
  const count = await redis.incr('visitor_count')

  // Set headers
  res.setHeader('Cache-Control', 'no-store')
  res.setHeader('Content-Type', 'application/json')

  // Return the count
  res.status(200).json({ count })
}