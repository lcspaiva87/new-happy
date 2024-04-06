import { FastifyRequest, FastifyReply } from "fastify";
import { z } from 'zod'
import { prisma } from "../lib/prisma";

// Esquema de validação
const FeedbackSchema = z.object({
  name: z.string(),
  message: z.string(),
});

async function CreateFeedback(req: FastifyRequest, reply: FastifyReply) {
  try {
    const { id } = req.params as { id: string };
    const feedbackData = FeedbackSchema.parse(req.body);

    const feedback = await prisma.feedback.create({
      data: {
        name: feedbackData.name,
        message: feedbackData.message,
        school: {
          connect: { id: Number(id) }
        }
      }
    });

    return reply.status(201).send({ message: "Feedback criado com sucesso", feedback });
  } catch (error) {
    return reply.status(400).send({ message: "Erro ao criar feedback",error:error });
  }
}

export { CreateFeedback }