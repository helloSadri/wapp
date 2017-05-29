const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//connect to DB
// mongoose.connect(config.database);

mongoose.Promise = global.Promise; mongoose.connect(config.database);﻿

//on connection 
mongoose.connection.on('connected', () => {
	console.log('Connected to database' + config.database);
});

//on error
mongoose.connection.on('error', (err) => {
	console.log('database error:' +err);
});

const app = express();

const users = require('./routes/users');

//Port Number
const port = 8888;

//cors MW
app.use(cors());

//set Static Folder
app.use(express.static(path.join(__dirname, 'client')));


//Body parser MW
app.use(bodyParser.json());

//Passport MW
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);


app.use('/users', users);

//Index Route
app.get('/', (req, res) => {
	res.send('Zabriskie point !');
});

//Sart Server
app.listen(port, () => {
	console.log('server start on port ' + port);
});