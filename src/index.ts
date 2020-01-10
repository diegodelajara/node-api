import express from 'express'
import exphbs from 'express-handlebars'
import router from './routes'
import movies from './routes/movies'

// Initializations
const app = express()

// Settings
app.set('port', process.env.PORT || 3001)
app.set('.hbs', '')
app.set('json spaces', 2)

// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Routes
app.use('/api/', router)
app.use('/api/', movies)

// Static Files

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Run server on port ${app.get('port')}`)
})