angular.module('app.services', [])

.service('BlankService', [function(){

}])

.service('Usuario', ['$http', function($http){
	var user;

	this.logar = function(email, senha){
		var data = {email: email, senha: senha}
		$http.post('https://rastreador-rubensdragneel.c9users.io/api/BzMobile/users/login.json', data).then(
			function(response){
				//Sucesso
				console.log(JSON.stringify(response));
			}, 
			function(error){
				console.log(JSON.stringify(error));
				//Error
			});
	}
	this.cadastrar = function(email, senha, confirmacao){
		if(senha === confirmacao){		
		var data = {email: email, senha: senha}
		$http.post('https://rastreador-rubensdragneel.c9users.io/api/BzMobile/users/add.json', data).then(
			function(response){
				//Sucesso
				console.log(JSON.stringify(response));
			}, 
			function(error){
				console.log(JSON.stringify(error));
				//Error
			});
		}
	}
	this.getUser = function(){
		return user;
	}
}])

.factory('local', [function() {
	var locals = 'Nada';

	return {
		setLocation: function(local){
				locals = local;
				return locals;
		},
		getLocation: function(){
			return locals;
		}
	}
}]);
