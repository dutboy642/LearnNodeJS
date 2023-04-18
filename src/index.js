const express = require('express')
const path = require('path')
const hbs = require('express-handlebars')
const mor = require('morgan')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

app.use(mor('combined'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.engine("hbs" , hbs.engine({extname: "hbs"}))
app.set('views', path.join(__dirname, 'resources/views'));
app.set("view engine" , "hbs")
// app.set("views" , "./views")

app.get('/', (req, res) => {
  // res.send('Hello World!')
  console.log(req.query)
  // res.send("")
  res.render("home")

})

app.get('/test', (req, res) => {
  // res.send('Hello World!')
  console.log(req.query)
  res.render("test")
})

app.post('/test', (req, res) => {
  // res.send('Hello World!')
  console.log(req.body)
  // res.render("test")
  res.send("")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})