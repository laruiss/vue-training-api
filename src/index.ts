import Fastify from 'fastify'

import marvelApi from './apis/marvel-api.js'
import omdbApi from './apis/omdb-api.js'
import swApi from './apis/sw-api.js'

import config from './config.js'

const { port } = config

/**
 * @type {import('fastify').FastifyInstance} Instance of Fastify
 */
 const fastify = Fastify({
  logger: true
})

fastify.register(marvelApi)
fastify.register(swApi)
fastify.register(omdbApi)

/**
 * Run the server!
 */
const start = async () => {
  try {
    await fastify.listen({ port })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()