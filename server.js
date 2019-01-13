var express = require("express");

var exphbs = require("express-handlebars");

var methodOverride = require("method-override");

var bodyParser = require("body-parser");

var app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended:false}))

app.use(methodOverride('__method'));

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));

app.set('view engine', 'handlebars');

var routes =require('./controllers/burgers_controller.js');
app.use('/', routes);

var port = process.env.PORT || 8080;

app.listen(port);

