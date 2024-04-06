import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { CreateSchool, DeleteSchool, GetSchoolById, ListSchoolsAll } from '../controller/school'



async function schoolRoutes(fastify: FastifyInstance) {
  fastify.post('/school', CreateSchool)
  fastify.get('/school', ListSchoolsAll)
  fastify.delete('/school', DeleteSchool)
  fastify.get('/school/:id', GetSchoolById)
}

export { schoolRoutes}