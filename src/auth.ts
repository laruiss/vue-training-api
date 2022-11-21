import config from './config'
import { createJwt } from './utils/tokens'

/**
 * Encapsulates the routes
 * @param {FastifyInstance} fastify  Encapsulated Fastify Instance
 * @param {Object} options plugin options, refer to https://www.fastify.io/docs/latest/Reference/Plugins/#plugin-options
 */
export default async function swApiRoutes (fastify, options) {
  fastify.post('/api/auth/token', async (request, reply) => {
    const { username, password } = request.body

    if (username !== config.username || password !== config.password) {
      return reply.status(401).send({ msg: 'Invalid credentials, please try again' })
    }

    const payload = { username, id: Math.random().toString().slice(2) }
    fastify.log.info({ payload })
    const token = await createJwt(payload)

    return {
      username,
      token,
    }
  })
}
