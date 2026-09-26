import { Sequelize } from 'sequelize-typescript'
import dotenv from 'dotenv'
import Product from '../models/Product.model'
dotenv.config({ quiet: true })

const db = new Sequelize(process.env.DATABASE_URL, {
  models: [Product],
  logging: false,
})

export default db
