// import dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 4001;

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(path.join(__dirname, 'public')));

// Sets up the routes
app.use(require('./controllers/blogRoutes'));


//Starts the server to begin listening
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('http://localhost:' + PORT));
  });
