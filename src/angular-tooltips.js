(function() {
    'use strict';

    var directive = function ($timeout) {
        return {
            restrict: 'A',
            scope: true,
            link: function ($scope, element, attrs) {
                if (attrs.title) {
                    // stop the standard tooltip from being shown
                    $timeout(function () {
                        element.removeAttr('ng-attr-title');
                        element.removeAttr('title');
                    });

                    element.on('mouseover', function (event) {
                        var direction = $scope.getDirection();

                        var tooltip = angular.element('<div>')
                            .addClass('angular-tooltip angular-tooltip-' + direction)
                            .html(attrs.title);

                        angular.element(document).find('body').append(tooltip);

                        tooltip.css($scope.calculatePosition(tooltip, direction));
                    });

                    $scope.removeTooltip = function () {
                        angular.element(document.querySelectorAll('.angular-tooltip')).remove();
                    };

                    $scope.getDirection = function() {
                        return element.attr('tooltip-direction') || element.attr('title-direction') || 'top';
                    };

                    $scope.calculatePosition = function(tooltip, direction) {
                        var tooltipBounding = tooltip[0].getBoundingClientRect();
                        var elBounding = element[0].getBoundingClientRect();
                        var scrollLeft = window.scrollX || document.documentElement.scrollLeft;
                        var scrollTop = window.scrollY || document.documentElement.scrollTop;
                        var arrow_padding = 12;

                        switch (direction) {
                            case 'top':
                            case 'top-center':
                            case 'top-middle':
                            default:
                                return {
                                    left: elBounding.left + (elBounding.width / 2) - (tooltipBounding.width / 2) + scrollLeft + 'px',
                                    top: elBounding.top - tooltipBounding.height - (arrow_padding / 2) + scrollTop + 'px',
                                };
                                break;
                            case 'top-right':
                                return {
                                    left: elBounding.left + elBounding.width - arrow_padding + scrollLeft + 'px',
                                    top: elBounding.top - tooltipBounding.height - (arrow_padding / 2) + scrollTop + 'px',
                                };
                                break;
                            case 'right-top':
                                return {
                                    left: elBounding.left + elBounding.width + (arrow_padding / 2) + scrollLeft + 'px',
                                    top: elBounding.top - tooltipBounding.height + arrow_padding + scrollTop + 'px',
                                };
                                break;
                            case 'right':
                            case 'right-center':
                            case 'right-middle':
                                return {
                                    left: elBounding.left + elBounding.width + (arrow_padding / 2) + scrollLeft + 'px',
                                    top: elBounding.top + (elBounding.height / 2) - (tooltipBounding.height / 2) + scrollTop + 'px',
                                };
                                break;
                            case 'right-bottom':
                                return {
                                    left: elBounding.left + elBounding.width + (arrow_padding / 2) + scrollLeft + 'px',
                                    top: elBounding.top + elBounding.height - arrow_padding + scrollTop + 'px',
                                };
                                break;
                            case 'bottom-right':
                                return {
                                    left: elBounding.left + elBounding.width - arrow_padding + scrollLeft + 'px',
                                    top: elBounding.top + elBounding.height + (arrow_padding / 2) + scrollTop + 'px',
                                };
                                break;
                            case 'bottom':
                            case 'bottom-center':
                            case 'bottom-middle':
                                return {
                                    left: elBounding.left + (elBounding.width / 2) - (tooltipBounding.width / 2) + scrollLeft + 'px',
                                    top: elBounding.top + elBounding.height + (arrow_padding / 2) + scrollTop + 'px',
                                };
                                break;
                            case 'bottom-left':
                                return {
                                    left: elBounding.left - tooltipBounding.width + arrow_padding + scrollLeft + 'px',
                                    top: elBounding.top + elBounding.height + (arrow_padding / 2) + scrollTop + 'px',
                                };
                                break;
                            case 'left-bottom':
                                return {
                                    left: elBounding.left - tooltipBounding.width - (arrow_padding / 2) + scrollLeft + 'px',
                                    top: elBounding.top + elBounding.height - arrow_padding + scrollTop + 'px',
                                };
                                break;
                            case 'left':
                            case 'left-center':
                            case 'left-middle':
                                return {
                                    left: elBounding.left - tooltipBounding.width - (arrow_padding / 2) + scrollLeft + 'px',
                                    top: elBounding.top + (elBounding.height / 2) - (tooltipBounding.height / 2) + scrollTop + 'px',
                                };
                                break;
                            case 'left-top':
                                return {
                                    left: elBounding.left - tooltipBounding.width - (arrow_padding / 2) + scrollLeft + 'px',
                                    top: elBounding.top - tooltipBounding.height + arrow_padding + scrollTop + 'px',
                                };
                                break;
                            case 'top-left':
                                return {
                                    left: elBounding.left - tooltipBounding.width + arrow_padding + scrollLeft + 'px',
                                    top: elBounding.top - tooltipBounding.height - (arrow_padding / 2) + scrollTop + 'px',
                                };
                                break;
                        }
                    }

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
