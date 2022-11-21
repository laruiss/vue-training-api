import { ofetch } from 'ofetch'

import config from "../config.ts"

const { omdbApiKey } = config

const omdbApiBaseUrl = 'http://www.omdbapi.com/'

/**
 * Encapsulates the routes
 * @param {FastifyInstance} fastify  Encapsulated Fastify Instance
 * @param {Object} options plugin options, refer to https://www.fastify.io/docs/latest/Reference/Plugins/#plugin-options
 */
export default async function omdbApiRoutes (fastify, options) {
  fastify.get('/api/omdb/*', async (request, reply) => {
    const query = {
      ...request.query,
      apikey: omdbApiKey,
    }

    const queryString = new URLSearchParams(query).toString()

    const omdbUrl = `${omdbApiBaseUrl}?${queryString}`
    fastify.log.info({omdbUrl})
    const response = await ofetch(omdbUrl)


    return {
      hello: 'omdb',
      response,
    }
  })
}