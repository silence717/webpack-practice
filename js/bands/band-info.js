/**
 * @author [https://github.com/silence717]
 * @since  2016-09-19
 */
module.exports = function(app) {
  app.directive('bandInfo', function(bandList) {
      return {
          template: require('./band-info.html'),
          restrict: 'E',
          controller: function($scope) {
            $scope.bands = bandList;
          }
      }
  })  
};