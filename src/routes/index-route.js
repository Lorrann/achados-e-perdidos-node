const express = require('express');
const app = express();
const router = express.Router();

const route = router.get('/', (req, res) => {
    res.status(200).send({
        title: "Achados e perdidos API",
        version: "0.0.1"
    });
});

module.exports = router;