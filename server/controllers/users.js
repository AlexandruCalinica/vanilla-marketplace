const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");


exports.addUser = (req, res) => {
  bcrypt.hash(req.body.password, 10).then(hash => {
    const user = new User({
      email: req.body.email,
      name: req.body.name,
      surname: req.body.surname,
      password: hash,
      cart: []
    });
    user
      .save()
      .then(result => {
        res.status(201).json({
          message: "User created!",
          result: result
        });
      })
      .catch(err => {
        res.status(500).json({
          message: "Invalid credentials!"
        });
      });
  });
}

exports.addToCart = (req, res) => {
  const user = new User({
    _id: req.body._id,
    cart: req.body.cart
  })
  User
    .updateOne({ _id: req.params.id }, user)
    .then(result => {
      if(result.n > 0) {
        res.status(200).json({ message: "Cart updated successfully!", cart: result });
      }
      else {
        res.status(401).json({ message: "Not authorized!" });
      }
    })
    .catch(error => {
      res.status(500).json({ message: "Could not update cart!" });
    });
}

exports.getUser = (req, res) => {
  userQuery = User.findById(req.params.id).populate("cart")
    .then(result => {
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({ message: "User not found!" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Fetching User failed!" });
    })
}

exports.getCart = (req, res) => {
  userQuery = User.findById(req.params.id).populate("cart")
    .then(result => {
      if (result) {
        res.status(200).json(result.cart);
      } else {
        res.status(404).json({ message: "User not found!" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Fetching User failed!" });
    })
}

exports.userLogin = (req, res) => {
  let fetchedUser;
  console.log(req.body);
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then(result => {
      if (!result) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      const token = jwt.sign(
        { email: fetchedUser.email, userId: fetchedUser._id, },
        "secret_this_should_be_longer",
        { expiresIn: "1h" }
      );
      res.status(200).json({
        token: token,
        expiresIn: 3600,
        userId: fetchedUser._id,
      });
    })
    .catch(err => {
      return res.status(401).json({
        message: "Invalid authentication credentials!"
      });
    });
}

