const cors = require("cors")
const express = require("express")
const jwt = require("jsonwebtoken")
const bodyParser = require("body-parser")

const watchesRoutes = require("./routes/watches")
const usersRoutes = require("./routes/users")

const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost/marketplace', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log("Connected to database!");
})
.catch(() => {
  console.log("Connection failed!");
});

mongoose.set('useCreateIndex', true);

const auth = require("./auth")
const todos = require("./todos")
// const watches = require("./watches")
const authorizedMiddleware = require("./authorized")
const cart = require("./cart")

const PORT = 3003
const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use("/api/auth", auth)
app.use("/api/users", usersRoutes)
app.use("/api/todos", authorizedMiddleware, todos)
app.use("/api/watches", watchesRoutes)
app.use('/api/cart', authorizedMiddleware, cart)

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})
