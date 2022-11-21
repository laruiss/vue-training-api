import dotenv from 'dotenv'

dotenv.config()

const port = process.env.API_PORT || 3005

const marvelPublicKey = process.env.MARVEL_PUBLIC_KEY || 'MISSING_MARVEL_PUBLIC_KEY'
const marvelPrivateKey = process.env.MARVEL_PRIVATE_KEY || 'MISSING_MARVEL_PRIVATE_KEY'
const omdbApiKey = process.env.OMDB_API_KEY || 'MISSING_OMDB_API_KEY'

export default {
  port,
  marvelPublicKey,
  marvelPrivateKey,
  omdbApiKey,
}