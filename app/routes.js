var User = require('mongoose').model('User')
module.exports = function(app){
	app.route('/user')
		.get(function(req, res){
			User.find({}, function(err, users){
				if(err){ console.log('err', err) }
				else { res.json(users) }
			})
		})
		.post(function(req, res, next){
			console.log('req.body', req.body)
			newUser = new User(req.body)
			newUser.save(function(err){
				if(err){ next(err) }
				else { res.json(newUser) }
			})
		})
		
	app.route('/user/:id')
		.get(function(req, res){
			User.findById(req.params.id, function(err, user){
				res.json(user)	
			})
		})
		.put(function(req, res){
			console.log('req.body', req.body)
			User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, user){
				if(err) { console.log(err) }
				else { res.json(user) }
			})
		})
		.delete(function(req, res, next){
			User.findByIdAndRemove(req.params.id, function(err, user){
				if (err) { 
					console.log('err', err) 
				}
				else { 
					res.json(user) 
				}
			})
		})
}
