const express = require("express")
const watchesController = require("../controllers/watches.js");
const router = express.Router();

router.get('/', watchesController.getWatches);
router.get('/:id', watchesController.getWatch);
router.get('/brands/list', watchesController.getBrands);
router.post('/add', watchesController.createWatch);

module.exports = router;
