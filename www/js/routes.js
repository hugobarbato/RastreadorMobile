angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('home', {
    url: '/home',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

  .state('logar', {
    url: '/login',
    templateUrl: 'templates/logar.html',
    controller: 'logarCtrl'
  })

  .state('cadastro', {
    url: '/cad',
    templateUrl: 'templates/cadastro.html',
    controller: 'cadastroCtrl'
  })

$urlRouterProvider.otherwise('/login')

  

});