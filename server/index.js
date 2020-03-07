const path = require("path");
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

const PORT = 3003
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use("/images", express.static(path.join("server/images")));
app.use("/api/users", usersRoutes)
app.use("/api/watches", watchesRoutes)

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})
