var widgets = angular.module('-.widgets');

widgets.directive('dashSmoothie',
  ['$io', '$timeout'
  , function ($io, $timeout){
    var dirObj = {
      // Can be both an attribute and an element
      // I'd rather it'd be an element thou
      restrict: 'EA',

      scope: {
        eventName: '@listenTo',
        height: '@height',
        width: '@width'
      },

      replace: false,
      template: '<canvas id="{{eventName}}_chart" height="{{height}}" width="{{width}}"></canvas>',
      
      link: {
        pre: function (scope, iElement, iAttrs) {
        },
        post: function (scope, iElement, iAttrs) {
          scope.smoothie = new SmoothieChart({
            millisPerPixel: iAttrs.speed || 20,
            interpolation: iAttrs.interpolation || 'bezier'
          });
          scope.time = new TimeSeries();

          console.log(iAttrs);
          
          $timeout(function () {
            scope.smoothie.streamTo($('#'+scope.eventName+'_chart')[0], 1000);
            scope.smoothie.addTimeSeries(scope.time, {
              strokeStyle: iAttrs.strokeStyle || '#00ff00',
              fillStyle: iAttrs.fillStyle,
              lineWidth: iAttrs.lineWidth || 2
            });
          },100);
          
          $io.$on(iAttrs.listenTo, function (data) {
            scope.time.append(new Date().getTime(),data);
          });
        }
      }
    };
    return dirObj;
  }]);