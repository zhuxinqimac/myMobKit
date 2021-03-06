angular.module( 'mymobkit.tracker', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',
  'resources.media',
  'directives.ngEnter'
])

.config(function config( $stateProvider, $sceProvider) {
  $sceProvider.enabled(false);
  $stateProvider.state( 'tracker', {
    url: '/tracker',
    views: {
      "main": {
        controller: 'TrackerCtrl',
        templateUrl: 'tracker/tracker.tpl.html'
      }
    },
    data:{ pageTitle: 'Tracker' }
  });
})
.controller( 'TrackerCtrl', function TrackerCtrl($rootScope, $scope, Media, $window, $timeout, $http, $log) {

})
;


		