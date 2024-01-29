<script>
    var app = angular.modul('myApp',[]);
    app.controller('myController',function($scop){
        $scope.
    });
</script>
///////////////////////////////////////////
<body>
    <lu ng-app="myApp" ng-controller="mtCtr">
        <li ng-repeat="x in names">
            {{x | myFilter}}
        </li>
    </lu>
    <script>
        var app = angular.modual('myApp', []);
        app.filter('myFilter', function(){
            return function(x){
                    
            };
        });
        app.controller('myCtr',function($scope){

        });
    </script>
</body>
////////////////////////////////
//creating drop down
<select>
    <options ng-repeat = "x in names"></options>
</select>
//or
<select ng-options = "x in names"></select>
//if it be x in (x, y) x is key and y is value
