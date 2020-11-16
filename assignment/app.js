  const express 		= require('express');	
const bodyParser 		= require('body-parser');
const exSession 		= require('express-session');
const cookieParser 		= require('cookie-parser');

const path              = require('path');

const app				= express();

const login				= require('./controllers/login');
const logout			= require('./controllers/logout');
const mlogin			= require('./controllers/mlogin');
const select			= require('./controllers/select');
const register			= require('./controllers/register');
const home				= require('./controllers/home');
const mhome				= require('./controllers/mhome');
const user				= require('./controllers/user');

const port				= 3000;

//configuration
app.set('view engine', 'ejs');

//middleware
app.use(express.static(path.join(__dirname+'/public'))); 
app.use('/abc', express.static('assets'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(exSession({secret: 'secret value', saveUninitialized: true, resave: false}));


app.use('/login',login);
app.use('/logout', logout);
app.use('/clogin',mlogin);
app.use('/select',select);
app.use('/register', register);
app.use('/home',home);
app.use('/chome',mhome);
app.use('/user',user);



//router
app.get('/', (req, res)=>{
	res.send('Hello');
});

//server startup
app.listen(port, (error)=>{
	console.log('server strated at '+port);
});