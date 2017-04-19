var app = angular.module("myApp", []);

app.controller("fileFolderCtrl",function ($scope) {

    $scope.myFolders = [
        {
            "name": "Default",
            "id": 111,
            files:{
                "files": [
                    {
                        "name": "File 1",
                        "size": "200000",
                        "date": "2016-06-30",
                        "type": "image/png"
                    },
                    {
                        "name": "File 2",
                        "size": "330033",
                        "date": "2016-06-30",
                        "type": "image/jpg"
                    }
                ]
            }
        },
        {
            "name": "Product Images",
            "id": 112,
            files:{
                "files": [
                    {
                        "name": "File 1",
                        "size": "200000",
                        "date": "2016-06-30",
                        "type": "image/png"
                    },
                    {
                        "name": "File 2",
                        "size": "330033",
                        "date": "2016-06-30",
                        "type": "image/jpg"
                    }
                ]
            }
        }
    ];

});

app.directive("fileread", [function () {
    return {
        restrict:'A',
        scope: {
            fileread: "=",
            myoldfolders:"="
        },
        link: function (scope, element) {
            element.bind("change", function (action) {
                scope.$apply(function () {
                    var myobj = {
                        name : action.target.value.replace(/.*[\/\\]/, ''),
                        id : scope.myoldfolders[scope.myoldfolders.length-1]['id'] + 1,
                        files : {
                            files:[]
                        }
                    };
                    for(i=0;i<action.target.files.length;i++){
                        var myfile={
                            name: action.target.files[i].name,
                            size: action.target.files[i].size,
                            type: action.target.files[i].type
                        };
                        myobj.files.files.push(myfile);
                    }
                    scope.myoldfolders.push(myobj);
                });
            });
        }
    }
}]);


app.directive("fileFolderDir", function() {
    return {
        restrict: 'E',
        scope:{
            folders:'='
        },
        templateUrl:'custom.html'
    };
});


