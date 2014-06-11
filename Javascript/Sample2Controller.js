var myApp = angular.module('myApp',[]);

angular.module('myApp')
    .filter('to_trusted', ['$sce', function($sce){
        return function(text) {
            return $sce.trustAsHtml(text);
        };
    }]);

function MyCtrl($scope) {

    $scope.my_html = '<div>hello<br/>world</div>';
}