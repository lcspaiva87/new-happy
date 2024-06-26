import 'dotenv/config'
import fastify from 'fastify'

import cors from '@fastify/cors'

import { resolve } from 'node:path'
import mongoose from 'mongoose'
import { schoolRoutes } from './router/school'
import { feedbackRoutes } from './router/feedback'

const app = fastify()

app.register(schoolRoutes)
app.register(feedbackRoutes)
app.register(require('@fastify/static'), {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads',
})

const port = parseInt(process.env.PORT || '5000', 10)
app.register(cors, { origin: true }) // full system open

try {
  app.listen(
    {
      port,
      host: '0.0.0.0',
    },
    () => {
      console.log(`HTTP server running on http://localhost:${port} 🚀`)
    },
  )
} catch (err) {
  console.error('Erro ao iniciar o servidor:', err)
  process.exit(1)
}