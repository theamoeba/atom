'use strict';

module.exports = function (ATOM_CONFIG) {
  return {
    restrict: 'E',
    templateUrl: ATOM_CONFIG.viewsPath + '/partials/sortheader.html',
    replace: true,
    scope: {
      field: '@',
      label: '@',
      criteria: '=' // Two-way binding!
    },
    link: function (scope) {
      scope.sortIsAsc = function () {
        return (typeof scope.criteria.sort_direction === 'undefined') || scope.criteria.sort_direction !== 'desc';
      };

      scope.toggleSortDir = function () {
        if (scope.criteria.sort !== scope.field) {
          scope.criteria.sort_direction = 'asc';
        } else {
          scope.criteria.sort_direction = (scope.sortIsAsc()) ? 'desc' : 'asc';
        }
        scope.criteria.sort = scope.field;
      };
    }
  };
};