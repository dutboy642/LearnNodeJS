const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');
const mor = require('morgan');
const app = express();
const port = 3000;

const routes = require('./routes/index');

app.use(express.static(path.join(__dirname, 'public')));

app.use(mor('combined'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('hbs', hbs.engine({ extname: 'hbs' }));
app.set('views', path.join(__dirname, 'resources/views'));
app.set('view engine', 'hbs');
// app.set("views" , "./views")

// routes
routes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
