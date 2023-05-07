const newsRouters = require('./newsRoutes');
const testRouters = require('./testRoutes');

function routes(app) {
  app.get('/', (req, res) => {
    console.log(req.query);
    res.render('home');
  });

  app.use('/news', newsRouters);

  app.use('/test', testRouters);
}

module.exports = routes;
