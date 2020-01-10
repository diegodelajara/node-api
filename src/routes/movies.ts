import { Router, Request } from 'express'
const _ = require('underscore')

const router:Router = Router()

const movies = [{
  "id": 1,
  "genre": "Adventure|Animation|Children",
  "title": "The True Story of Puss 'n Boots",
  "year": 2007
}, {
  "id": 2,
  "genre": "Action|Thriller",
  "title": "Panic",
  "year": 1985
}]

// get
router.get('/movies', (req: Request, res) => {
  res.json(movies)
})

// post
router.post('/movies', (req, res) => {
  const { genre, title, year } = req.body
  if(genre && title && year) {
    const id = movies.length + 1
    const newMovie = { id, ...req.body}
    movies.push(newMovie)
  }
  res.send(movies)
})

// delete
router.delete('/movies/:id', (req, res) => {
  const { id } = req.params
  // const movie = _.each(movies, (item, i) => {
  //   if (item.id == id) {
  //     console.log(id)
      
  //   }
  // })
  movies.some((movie:any, i) => {
    if(movie.id == id) {
      movies.splice(i, 1)
    }
  })

  res.send(movies)
})


export default router