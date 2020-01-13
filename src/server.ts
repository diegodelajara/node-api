import express from 'express'
import MoviesRoutes from './routes/movies'

class Server {
  public app:express.Application

  constructor() {
    this.app = express()
    this.config()
  }

  config() {
    this.app.set('port', process.env.PORT || 3001)
  }

  routes() {
    this.app.use(MoviesRoutes)
  }

  start(){
    this.app.listen(this.app.get('port'), () => {
      console.log(`Server on port ${this.app.get('port')}`)
      
    })
  }
}

const server = new Server()
server.start()