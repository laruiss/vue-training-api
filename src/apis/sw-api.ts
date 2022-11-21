import { ofetch } from 'ofetch'

const swApiBaseUrl = 'https://swapi.dev/api/'

/**
 * Encapsulates the routes
 * @param {FastifyInstance} fastify  Encapsulated Fastify Instance
 * @param {Object} options plugin options, refer to https://www.fastify.io/docs/latest/Reference/Plugins/#plugin-options
 */
export default async function swApiRoutes (fastify, options) {
  fastify.get('/api/sw/*', async (request, reply) => {
    const query = {
      ...request.query,
    }

    const queryString = new URLSearchParams(query).toString()

    const swUrl = `${swApiBaseUrl}${Object.values(request.params).join('/')}?${queryString}`
    fastify.log.info({swUrl})
    const response = await ofetch(swUrl)


    return {
      hello: 'sw',
      response,
    }
  })
}