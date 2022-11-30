const express = require('express');
const parser = require('body-parser');
const flightRoutes = require('./routes/flightRoutes');
const scheduleRoutes = require('./routes/scheduleRoutes');
const passengerRoutes = require('./routes/passengerRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const profileRoutes = require('./routes/profileRoutes');
const flightMasterHomeRoutes = require('./routes/flightMasterHomeRoutes');
const flightMasterRoutes = require('./routes/flightMasterRoutes');
const homeRoutes = require('./routes/homeRoutes');
const path = require('path');
const cookieSession = require('cookie-session');
const {engine} = require('express-handlebars');
const passMiddleware = require('./middlewares/passengerMiddleware');
// const flightMasMiddleware = require('./middlewares/flightMasterMiddleware');

// Creating an express app.
const app = express();

// Configuring the express app to use handlebars template engine.
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// Configuring body parser.
app.use("/", parser.urlencoded({extended: true}));

// Configuring static files middleware.
app.use("/static", express.static(path.join(__dirname, 'static')));

app.use(cookieSession({
    name: 'session',
    httpOnly: true,
    keys: ["asdghjhgsdahjsgdhjasd"],
    maxAge: 24 * 60 * 60 * 1000
}));

app.use(passMiddleware);
// app.use(flightMasMiddleware);

app.use(flightRoutes);
app.use(scheduleRoutes);
app.use(passengerRoutes);
app.use(bookingRoutes);
app.use(flightMasterRoutes);
app.use(homeRoutes);
app.use(profileRoutes);
app.use(flightMasterHomeRoutes);

function handler(req, res){
    res.send("Hello World")
}
app.get('/test', handler)

app.listen(80);
