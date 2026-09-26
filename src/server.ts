import express from 'express'
import cors, { type CorsOptions } from 'cors'
import morgan from 'morgan'
import productsRouter from './router'
import swaggerUi from 'swagger-ui-express'
import swaggerSpec from './config/swagger'

// Instancia de express
const server = express()

// Permitir conexiones
const corsOptions: CorsOptions = {
  origin: function (origin, callback) {
    if (origin === process.env.FRONTEND_URL) {
      callback(null, true)
    } else {
      callback(new Error('Error de CORS'))
    }
  },
}
server.use(cors(corsOptions))
// Leer datos de formulario
server.use(express.json())

server.use(morgan('dev'))

server.use('/api/products', productsRouter)

// Docs
server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

export default server
