import { Router, Request } from 'express'

const router:Router = Router()

router.get('/people', (req: Request, res) => {
  res.json(
    [{
      "id": 1,
      "first_name": "Griffith"
    }, {
      "id": 2,
      "first_name": "Caressa"
    }]
  )
})
export default router