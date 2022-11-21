import dotenv from 'dotenv'

dotenv.config()

const port = process.env.API_PORT || 3005
const tokenExpiration = process.env.AUTH_JWT_EXPIRATION || '1h'
const tokenSecret = process.env.AUTH_JWT_SECRET || '53CR37P455PHR453'
const username = process.env.USERNAME || 'sherlock'
const password = process.env.PASSWORD || '221B;BakerStreet'

const marvelPublicKey = process.env.MARVEL_PUBLIC_KEY || 'MISSING_MARVEL_PUBLIC_KEY'
const marvelPrivateKey = process.env.MARVEL_PRIVATE_KEY || 'MISSING_MARVEL_PRIVATE_KEY'
const omdbApiKey = process.env.OMDB_API_KEY || 'MISSING_OMDB_API_KEY'

export default {
  port,
  marvelPublicKey,
  marvelPrivateKey,
  omdbApiKey,
  tokenExpiration,
  tokenSecret,
  username,
  password,
}
