import { Router, Request , Response} from 'express'

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




class MovieRoutes {
  router: Router

  constructor() {
    this.router = Router()
    this.routes()
  }

  routes() {
    // get
    this.router.get('/movies', (req: Request, res: Response) => {
      res.json(movies)
    })
  }
}

const movieRoutes = new MovieRoutes()
movieRoutes.routes()
export default movieRoutes.router