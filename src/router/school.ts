import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { CreateSchool } from '../controller/school'

const createSchool = new CreateSchool()

async function schoolRoutes(fastify: FastifyInstance) {
  fastify.post('/users', async (request: FastifyRequest, reply: FastifyReply) => {
    // Handle the request here
  })
}