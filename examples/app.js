angular.module('app', ['tooltips']).controller('AppCtrl', function($scope) {
    $scope.tooltip = '<strong>Bold text</strong><br>And an icon<br><i class="fa fa-star"><i>';
});
