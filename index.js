const express  = require('express'),
           app = express(),
           bodyParser = require('body-parser'),
           mongoose   = require('mongoose'),
           passport   = require('passport'),
      LocalStrategy = require('passport-local'),
      flash      = require('connect-flash'),
      User = require('./models/user'),
       methodOverride = require("method-override");
           
const indexRoutes = require('./routes/index'),
     documentRoutes = require('./routes/documents');

// Setting up app
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());

app.use(require("express-session")({
    secret: "Just a secret phrase to encrypt our sessions",
    resave: false,
    saveUninitialized: false
    
}));


// MongoDB connect
mongoose.connect('mongodb://localhost/integritat');

// Passport    
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// Add routes
app.use('/', indexRoutes);
app.use('/documents', documentRoutes);

           
// Start server           
app.listen(process.env.PORT, process.env.IP, () => {
    console.log('Integritat running...', 'Listening on '+process.env.IP+':'+process.env.PORT);
});