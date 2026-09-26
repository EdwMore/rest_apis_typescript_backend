import colors from 'colors'
import server from './server'
import db from './config/db'

const port = process.env.PORT || 4000

export async function connectDB() {
  try {
    await db.authenticate()
    await db.sync()

    console.log(colors.blue('Conexion a DB exitosa'))

    server.listen(port, () => {
      console.log(
        colors.cyan.bold(`REST API en el puerto ${port}`)
      )
    })
  } catch (error) {
    console.log(colors.red.bold('Ocurrio un Error'))
    console.log(error)
  }
}

connectDB()