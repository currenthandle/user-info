var mongoose = require('mongoose')
module.exports = function() {
	var db
	if(process.env.NODE_ENV === 'development'){
		mongoose.connect('mongodb://localhost/explore-mean')
	} else { 
		mongoose.connect('mongodb://leptone:leptone@ds051913.mongolab.com:51913/heroku_31ftz0pl')
	}	
	require('../app/models/user')
	
	return db
}
