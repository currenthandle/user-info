var mongoose = require('mongoose')
module.exports = function() {
	var db
	if(process.env.NODE_ENV === 'development'){
		mongoose.connect('mongodb://localhost/explore-mean')
	} else { 
		mongoose.connect('mongodb://leptone:leptone@ds033145.mongolab.com:33145/heroku_n1twfcxv')
	}	
	require('../app/models/user')
	
	return db
}
