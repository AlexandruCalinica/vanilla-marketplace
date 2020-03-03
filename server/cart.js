const express = require("express");

const cartRouter = express.Router();

var cart = [];

cartRouter.post('/', (req, res) => {
  const { itemId } = req.body;
  cart.push(itemId);
  res.json(itemId);
})

cartRouter.get('/', (req, res) => {
  res.json(cart);
})

cartRouter.delete('/:itemId', (req, res) => {
  const itemId = req.params.itemId;
  cart = cart.filter(el => el !== itemId);
  res.json(cart);
})

module.exports = cartRouter;