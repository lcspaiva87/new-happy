import { FastifyInstance } from "fastify";
import { CreateFeedback } from "../controller/feedback";

async function feedbackRoutes(fastify: FastifyInstance) {
  fastify.post('/feedback/:id', CreateFeedback)
}

export { feedbackRoutes }