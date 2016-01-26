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
		var now = new Date(),
			dateString = ''
		
		var month = now.getMonth(),
			day = now.getDate(),
			year = now.getFullYear()
		
		switch(month){
			case 0:
				month = 'Jan' 
				break
			case 1:
				month = 'Feb'
				break
			case 2:
				month = 'Mar'
				break
			case 3:
				month = 'Apr'
				break
			case 4:
				month = 'May'
				break
			case 5:
				month = 'Jun'
				break
			case 6:
				month = 'Jul'
				break
			case 7: 
				month = 'Aug'
				break
			case 8:
				month = 'Sep'
				break
			case 9:
				month = 'Oct'
				break
			case 10:
				month = 'Nov'
				break
			default:
				month = 'Dec'
		}
		
		$scope.user.created = month + ' ' + day + ',' + ' ' + year
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

