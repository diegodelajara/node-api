import { Router, Request, Response } from 'express'
const router:Router = Router()

const people = [{
      "id": 1,
      "first_name": "Griffith"
    }, {
      "id": 2,
      "first_name": "Caressa"
    }]

class PeopleRoutes {
  router: Router

  constructor() {
    this.router = Router()
    this.routes()
  }

  routes() {
    // get
    this.router.get('/', (req: Request, res: Response) => {
      res.send('people')
    })
  }
}

const peopleRoutes = new PeopleRoutes()
peopleRoutes.routes()
export default peopleRoutes.router