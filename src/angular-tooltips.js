(function() {
    'use strict';

    var directive = function ($timeout) {
        return {
            restrict: 'A',
            link: function ($scope, element, attrs) {
                if (attrs.title) {
                    // stop the standard tooltip from being shown
                    $timeout(function () {
                        element.removeAttr('ng-attr-title');
                        element.removeAttr('title');
                    });

                    element.on('mouseover', function (event) {
                        var tooltip = angular.element('<div>')
                            .addClass('angular-tooltip')
                            .html(attrs.title);

                        angular.element(document).find('body').append(tooltip);

                        var tooltipBounding = tooltip[0].getBoundingClientRect();
                        var elBounding = element[0].getBoundingClientRect();

                        tooltip.css({
                            left: elBounding.left + (elBounding.width / 2) - (tooltipBounding.width / 2) + (window.scrollX || document.documentElement.scrollLeft) + 'px',
                            top: elBounding.top - tooltipBounding.height - 10 + (window.scrollY || document.documentElement.scrollTop) + 'px',
                        });
                    });

                    $scope.removeTooltip = function () {
                        angular.element(document.querySelectorAll('.angular-tooltip')).remove();
                    };

                    element.on('mouseout', $scope.removeTooltip);
                    element.on('destroy', $scope.removeTooltip);
                    $scope.$on('$destroy', $scope.removeTooltip);
                }
            }
        };
    };

    directive.$inject = ['$timeout'];

    angular.module('tooltips', []).directive('title', directive);
})();
