"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class PostsRoutes {
    constructor() {
        this.router = express_1.Router();
    }
    getPosts(req, res) {
        res.send('posts');
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
        this.router.get('/posts', this.getPosts);
        this.router.post('/post', this.createPost);
        this.router.put('/post/:id', this.createPost);
        this.router.put('/post-delete/:id', this.createPost);
    }
}
const postsRoutes = new PostsRoutes();
postsRoutes.routes();
exports.default = postsRoutes.router;
