var mongoose = require('mongoose')
	Schema = mongoose.Schema
	
var userSchema = new Schema ({
	username: String,
	password: String,
	created: Number 
})

mongoose.model('User', userSchema)
