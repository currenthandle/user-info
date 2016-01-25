process.env.NODE_ENV = process.env.NODE_ENV || 'development'

var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	morgan = require('morgan'),
	compression = require('compression'),
	mongoose = require('./config/mongoose.js'),
	db = mongoose()

	if(process.env.NODE_ENV === 'development'){
		app.use(morgan('dev'))
	} else {
		app.use(compression())	
	}
app.use(express.static(__dirname + '/public'))

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

require('./app/routes')(app)

app.listen(3000)

console.log('Server listening on port 3000')
