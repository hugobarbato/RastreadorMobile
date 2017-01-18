

angular.module('starter', ['ionic', 'ngCordova', 'app.controllers', 'app.routes', 'app.directives','app.services'])
.run(function($ionicPlatform, local, $http) {
      $ionicPlatform.ready(function() {
        if(window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);
        }
        if(window.StatusBar) {
          StatusBar.styleDefault();
        }
      
        console.log('Device '+device.uuid);

        // Android customization
        cordova.plugins.backgroundMode.setDefaults({ text:'Olá estou rodando aqui.'});
        // Enable background mode
        cordova.plugins.backgroundMode.enable();

        // Called when background mode has been activated
        cordova.plugins.backgroundMode.onactivate = function () {
          setTimeout(function () {
                // Modify the currently displayed notification
                cordova.plugins.backgroundMode.configure({
                    text:'Não me feche, por favor :) '
                });
            }, 5000);
        }
      }, false);  
      var onSuccess = function(position) {
          var postData = {
                    id : device.uuid,
                    lng : position.coords.longitude,
                    lat : position.coords.latitude,
                    hour : position.coords.timestamp,
                    speed : position.coords.speed
          };

          $http.post('https://rastreador-rubensdragneel.c9users.io/api/BzMobile/records/add.json', postData
          ).then(function (response) {
            console.log('S P '+JSON.stringify(response));
          }, function (response) {
            console.log('F P '+JSON.stringify(response));
          });
        
          local.setLocation('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
      };
      function onError(error) {
          local.setLocation('code: '    + error.code    + '\n' +
                'message: ' + error.message + '\n');
      }
      navigator.geolocation.watchPosition(onSuccess, onError, {maximumAge: 3000, timeout: 10000, enableHighAccuracy: true});
            
      // --------------------------------------------------------------------------- */
  
})
.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider ){
  
  $ionicConfigProvider.navBar.alignTitle('center');
})