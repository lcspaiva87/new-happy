import { FastifyRequest, FastifyReply } from "fastify";
import { z } from 'zod'
import { prisma } from "../lib/prisma";

async function CreateSchool(req: FastifyRequest, reply: FastifyReply) {
  try {
    const School = z.object({
      name: z.string(),
      latitude: z.number(),
      longitude: z.number(),
      about: z.string(),


    })
    const { name, latitude, longitude, about,  } = School.parse(req.body)
    const Coluna = await prisma.school.create(
      {
        data: {
          name,
          latitude,
          longitude,
          about,
   
        }
      })
    reply.send(Coluna).status(201).send({ message: "Escola criada com sucesso" })
  } catch (error) {
    return reply.status(400).send({ message: "Erro ao criar escola" })
  }
}
async function ListSchoolsAll(req: FastifyRequest, reply: FastifyReply) {
  try {
    const schools = await prisma.school.findMany();
    return reply.status(200).send({data:schools});
  } catch (error) {
    return reply.status(400).send({ message: "Erro ao listar escolas" ,error:error});
  }
}
async function DeleteSchool(req: FastifyRequest, reply: FastifyReply) {
  try {
    const { id } = req.params as { id: string };
    await prisma.school.delete({ where: { id: Number(id) } });
    return reply.status(200).send({ message: "Escola excluída com sucesso" });
  } catch (error) {
    return reply.status(400).send({ message: "Erro ao excluir escola" });
  }
}
async function GetSchoolById(req: FastifyRequest, reply: FastifyReply) {
  try {
    const { id } = req.params as { id: string };
    const school = await prisma.school.findMany({
      include: {
        feedback: true
      },
       where: { id: Number(id) } 
      });
    if (!school) {
      return reply.status(404).send({ message: "Escola não encontrada" });
    }
    return reply.status(200).send(school);
  } catch (error) {
    return reply.status(400).send({ message: "Erro ao buscar escola" });
  }
}


export { CreateSchool, ListSchoolsAll, DeleteSchool ,GetSchoolById}