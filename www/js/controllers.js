angular.module('app.controllers', [])
  
.controller('pageCtrl', ['$scope', '$stateParams', 'local', '$interval',
function ($scope, $stateParams, local, $interval) {
    $scope.location = 'Gerando Localização';
    $interval(function() {
      $scope.location = local.getLocation();
  }, 3000);

}])
   
.controller('logarCtrl', ['$scope', '$stateParams', 'Usuario', '$state',
function ($scope, $stateParams, $state, Usuario) {
     $scope.Usuario = Usuario;
}])
   
.controller('cadastroCtrl', ['$scope', '$stateParams','Usuario', '$state', 
function ($scope, $stateParams, $state, Usuario) {
     $scope.Usuario = Usuario;

}])
 