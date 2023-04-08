const express = require('express')
const path = require('path')
const hbs = require('express-handlebars')
const mor = require('morgan')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

app.use(mor('combined'))
app.engine("hbs" , hbs.engine({extname: "hbs"}))
app.set('views', path.join(__dirname, 'resources/views'));
app.set("view engine" , "hbs")
// app.set("views" , "./views")

app.get('/', (req, res) => {
  // res.send('Hello World!')
  res.render("home")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})