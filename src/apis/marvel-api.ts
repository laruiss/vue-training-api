import { md5 } from "../utils/crypto"
import { ofetch } from 'ofetch'

import config from "../config.ts"

const { marvelPublicKey: publicKey, marvelPrivateKey: secret } = config

const marvelApiBaseUrl = 'http://gateway.marvel.com/v1/public/'

/**
 * Encapsulates the routes
 * @param {FastifyInstance} fastify  Encapsulated Fastify Instance
 * @param {Object} options plugin options, refer to https://www.fastify.io/docs/latest/Reference/Plugins/#plugin-options
 */
export default async function marvelApiRoutes (fastify, options) {
  fastify.get('/api/marvel/*', async (request, reply) => {
    fastify.log.info({publicKey, secret})
    const ts = Date.now()
    const hash = md5(ts + secret + publicKey)
    const query = {
      ...request.query,
      ts,
      hash,
      apikey: publicKey,
    }

    const queryString = new URLSearchParams(query).toString()

    const marvelUrl = `${marvelApiBaseUrl}${Object.values(request.params).join('/')}?${queryString}`
    fastify.log.info({marvelUrl})
    const response = await ofetch(marvelUrl)


    return {
      hello: 'marvel',
      ts,
      hash,
      publicKey,
      secret,
      response,
    }
  })
}