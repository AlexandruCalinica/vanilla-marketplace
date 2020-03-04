const express = require("express");
const userControllers = require("../controllers/users");
const router = express.Router();

router.get('/:id', userControllers.getUser);
router.get('/:id/cart', userControllers.getCart);
router.post('/signup', userControllers.addUser);
router.put('/:id', userControllers.addToCart);
router.post('/login', userControllers.userLogin);

module.exports = router;