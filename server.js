var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	morgan = require('morgan')
	mongoose = require('./config/mongoose.js'),
	db = mongoose()

app.use(morgan('dev'))

app.use(express.static(__dirname + '/public'))

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

require('./app/routes')(app)

app.listen(3000)

console.log('Server listening on port 3000')
