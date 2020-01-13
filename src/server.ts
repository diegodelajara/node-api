import express from 'express'
import Movies from './routes/movies'
import Posts from './routes/posts'
import morgan from 'morgan'
import mongoose from 'mongoose'
import compression from 'compression'
import cors from 'cors'

class Server {
  public app:express.Application

  constructor() {
    this.app = express()
    this.config()
    this.routes()
  }

  config() {
    const mongoUri = 'mongodb+srv://admin:Rena2413@cluster0-eox56.gcp.mongodb.net/test?retryWrites=true&w=majority'
    mongoose.set('useFindAndModify', true)
    mongoose.connect(mongoUri || process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useCreateIndex: true
    })
    .then(db => console.log('connected'))
    this.app.set('port', process.env.PORT || 3001)
    //Middlewares
    this.app.use(morgan('dev'))
    this.app.use(express.urlencoded({extended: false}))
    this.app.use(express.json())
    this.app.use(compression())
    this.app.use(cors())
  }

  routes() {
    this.app.use(Movies)
    this.app.use('/api/', Posts)
  }

  start(){
    this.app.listen(this.app.get('port'), () => {
      console.log(`Server on port ${this.app.get('port')}`)
    })
  }
}

const server = new Server()
server.start()