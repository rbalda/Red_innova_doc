var app = angular.module('RedInnDoc',['ngMaterial','ngResource','ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/concursos/use-case', {
        templateUrl: '/data/concursos/concursos_casos.html'
      })
    .when('/incubacion/use-case', {
        templateUrl: '/data/incubaciones/incubacion_casos.html'
      });
}]);

app.controller('mainController',['$scope','$location',function($scope,$location){
    $scope.modules = [
        {
            "id":0,
            "nombre":"Usuarios y Grupos",
            "url":"users/",
            "opts":[
                {
                    "nombre":"Casos de Uso",
                    "url":"users/use-case",
                },
                {
                    "nombre":"Prototipos",
                    "url":"users/prototypes",
                }
            ]
        },
        {
            "id":1,
            "nombre":"Ofertas y Demandas",
            "url":"ofertas/",
            "opts":[
                {
                    "nombre":"Casos de Uso",
                    "url":"ofertas/use-case",
                },
                {
                    "nombre":"Prototipos",
                    "url":"ofertas/prototypes",
                }
            ]
        },
        {
            "id":2,
            "nombre":"Concursos",
            "url":"concursos/",
            "opts":[
                {
                    "nombre":"Casos de Uso",
                    "url":"concursos/use-case",
                },
                {
                    "nombre":"Prototipos",
                    "url":"concursos/prototypes",
                }
            ]
        },
        
        {
            "id":3,
            "nombre":"Incubaciones",
            "url":"incubacion/",
            "opts":[
                {
                    "nombre":"Casos de Uso",
                    "url":"incubacion/use-case",
                },
                {
                    "nombre":"Prototipos",
                    "url":"incubacion/prototypes",
                }
            ]
        }        
    
    ];
    
    $scope.selected = 0;
    
    $scope.go = function(url){
        $location.path(url);
    };
    
    $scope.selectModulo = function(op){
        $scope.selected = op;
        $scope.go($scope.modules[$scope.selected].url);
    };
    
    $scope.ifSelected = function(op){
        return $scope.selected===op;
    };
    
    $scope.getOpts = function(op){
      return $scope.modules[op].opts;  
    };

}]);