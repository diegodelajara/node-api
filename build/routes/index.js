"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/people', (req, res) => {
    res.json([{
            "id": 1,
            "first_name": "Griffith"
        }, {
            "id": 2,
            "first_name": "Caressa"
        }]);
});
exports.default = router;
