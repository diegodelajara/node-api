"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const people = [{
        "id": 1,
        "first_name": "Griffith"
    }, {
        "id": 2,
        "first_name": "Caressa"
    }];
class PeopleRoutes {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        // get
        this.router.get('/', (req, res) => {
            res.send('people');
        });
    }
}
const peopleRoutes = new PeopleRoutes();
peopleRoutes.routes();
exports.default = peopleRoutes.router;
