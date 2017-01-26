//Express and Sequelize Boilerplate with Nunjucks
//
//Use command: npm init
//to setup your package.json


let express = require('express');

/////Require Middleware, choose one of the following
//let morgan = require('morgan') 
let volleyball = require('volleyball');
let bodyParser = require('body-parser');

let nunjucks = require('nunjucks'); //Template processor
let app = express();

/////Router Setup
//Remember you can and should have multiple routers for larger applications
//EXAMPLE//
//let wikiRouter = require(./routes/wiki);
//let usersRouter = require('./routes/users');
let routes = require('./routes/router');

/////Engine Setup (View Engine) (Nunjucks)
app.engine('html', nunjucks.render); // How to render html templates
app.set('view engine', 'html'); //What file extension do our templates have
                                //There is now no longer a need to add .html
nunjucks.configure('views', { noCache: true }); // where to find the views, caching off (performance)

/////Starting your server
app.listen(3000, function(){
  console.log('listening on port 3000');
});

///////////////////////////////////////////////
/////Use, Express is essentially all Middleware
///////////////////////////////////////////////
app.use(volleyball);

/////Body Parser Use
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/////Static middleware, nondynamic route handling
//__dirname is the directory name of the current module
//running node app.js will make the __dirname equal to
//the directory its run in
app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/public'));

/////Routes Use
//EXAMPLE// Multiple routers
//app.use('/wiki', wikiRouter);
//app.use('/users', usersRouter);
app.use('/', routes);



/////Error Handling (Not necesscary but nice to have)
/////If you're using this to handle your errors, ensure you 
/////understand how to customize
///////////////////////////////////////////////////////////////
//Express error handling always takes in four parameters, which
//signals to express that this is indeed the end of the line for 
//errors, do not create middleware with four parameters
app.use(function (err, req, res, next) {
    //Set statusCode if no statuscode was set
    if (!err.statusCode) {
        err.statusCode = 500;
    }

    res.status(err.statusCode).send(err.message);
});


//necesscary?
module.exports = app;
