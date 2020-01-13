import { Response, Request, Router } from 'express'

class PostsRoutes {
  router: Router

  constructor() {
    this.router = Router()
  }
  getPosts(req: Request, res: Response) {
    res.send('posts')
  }

  createPost() {

  }

  getPost() {

  }

  deletePost() {

  }

  editPost() {

  }

  routes() {
    this.router.get('/posts', this.getPosts)
    this.router.post('/post', this.createPost)
    this.router.put('/post/:id', this.createPost)
    this.router.put('/post-delete/:id', this.createPost)
  }
}

const postsRoutes = new PostsRoutes()
postsRoutes.routes()

export default postsRoutes.router