import 'dotenv/config'
import fastify from 'fastify'

import multipart from '@fastify/multipart'
import cors from '@fastify/cors'

import { resolve } from 'node:path'
import mongoose from 'mongoose'

const app = fastify()
app.register(multipart)

app.register(require('@fastify/static'), {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads',
})

const port = parseInt(process.env.PORT || '5000', 10)
app.register(cors, { origin: true }) // full system open

mongoose
  .connect(
    'mongodb+srv://lcspaiva:FmyKUhIRQ801IUqL@cluster0.rplqvhe.mongodb.net/memorie?retryWrites=true',
  )
  .then(() => {
    console.log('Conexão com o MongoDB estabelecida com sucesso!')
    app.listen(
      {
        port,
        host: '0.0.0.0',
      },
      () => {
        console.log(`HTTP server running on http://localhost:${port} 🚀`)
      },
    )
  })
  .catch((err) => {
    console.error('Erro ao conectar ao MongoDB:', err)
    process.exit(1)
  })
