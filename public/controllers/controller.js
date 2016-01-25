var myApp = angular.module('myApp', [])
myApp.controller('appCtrl', ['$scope', '$http', function($scope, $http) {
	
	function refresh(){
		$http.get('/user').success(function(users){
			console.log('got users')	
			// All users in JSON format
			$scope.users = users
			
			// User Model
			$scope.user = ''
		})
	}
	refresh()
	
	
	// Add New Users
	$scope.addUser = function(){
		$scope.user.created = Date.now()
		$http.post('/user', $scope.user).success(function(response){
			console.log('response',response)
			refresh()	
		})
	}
	
	$scope.edit = function(id){
		$http.get('/user/'+id).success(function(user){
			$scope.user = user
		})		
	}
	
	$scope.update = function(){
		$http.put('/user/'+$scope.user._id, $scope.user).success(function(response) {
			refresh()
		})
	}
	
	$scope.remove = function(id){
		$http.delete('/user/'+id).success(function(user){
			console.log('user', user)
			refresh()
		})
	}
	$scope.deselect = function(){
		$scope.user = ''
	}
}])

