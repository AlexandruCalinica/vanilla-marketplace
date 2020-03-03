const User = require("../models/user");

exports.addUser = (req, res, next) => {
  const user = new User({
    email: req.body.email,
    name: req.body.name,
    surname: req.body.surname,
    password: req.body.password,
    cart: []
  });

  user
    .save()
    .then(createdUser => {
      res.status(201).json({
        message: "User added successfully",
        user: {
          ...createdUser,
          id: createdUser._id
        }
      })
    })
    .catch(err => {
      res.status(500).json({
        message: "Creating a user failed!"
      });
    })
}

exports.addToCart = (req, res, next) => {
  const user = new User({
    _id: req.body._id,
    cart: req.body.cart
  })
  User
    .updateOne({ _id: req.params.id }, user)
    .then(result => {
      if(result.n > 0) {
        res.status(200).json({ message: "Cart updated successfully!" });
      }
      else {
        res.status(401).json({ message: "Not authorized!" });
      }
    })
    .catch(error => {
      res.status(500).json({ message: "Could not update cart!" });
    });
}

exports.getUser = (req, res, next) => {
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

