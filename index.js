const express = require('express')
const app = express()

const port = 5000

const engine = require("express-handlebars").engine

app.engine("handlebars", engine())
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }))

app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})

app.get('/', (req, res) => {
  res.render('formulaire')
})

app.post('/signup', (req, res) => {
  console.log(req.body)
})