"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
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
    }];
class MovieRoutes {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        // get
        this.router.get('/movies', (req, res) => {
            res.json(movies);
        });
    }
}
const movieRoutes = new MovieRoutes();
movieRoutes.routes();
exports.default = movieRoutes.router;
